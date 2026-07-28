import { useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import AppLayout from '../../Layouts/AppLayout';

function formatDateTime(value, timeZone) {
    return value ? new Date(value).toLocaleString(undefined, { timeZone }) : '—';
}

function toDatetimeLocalValue(date) {
    const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

    return local.toISOString().slice(0, 16);
}

function formatDuration(startsAt, endsAt) {
    if (!startsAt || !endsAt) {
        return null;
    }

    const minutes = Math.round((new Date(endsAt) - new Date(startsAt)) / 60000);

    if (minutes < 0) {
        return null;
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
        return `${remainingMinutes}m`;
    }

    if (remainingMinutes === 0) {
        return `${hours}h`;
    }

    return `${hours}h ${remainingMinutes}m`;
}

function ActivityForm({ activity, onCancel }) {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        title: activity?.title ?? '',
        description: activity?.description ?? '',
        starts_at: toDatetimeLocalValue(activity ? new Date(activity.starts_at) : new Date()),
        ends_at: activity?.ends_at ? toDatetimeLocalValue(new Date(activity.ends_at)) : '',
    });

    function submit(e) {
        e.preventDefault();

        const options = {
            onSuccess: () => {
                reset();
                onCancel();
            },
        };

        if (activity) {
            put(`/activities/${activity.id}`, options);
        } else {
            post('/activities', options);
        }
    }

    return (
        <form onSubmit={submit} className="mt-4 space-y-4 rounded-md border border-gray-200 bg-white p-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                </label>
                <input
                    id="title"
                    type="text"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                />
                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <textarea
                    id="description"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                />
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="starts_at" className="block text-sm font-medium text-gray-700">
                        Starts at
                    </label>
                    <input
                        id="starts_at"
                        type="datetime-local"
                        value={data.starts_at}
                        onChange={(e) => setData('starts_at', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    />
                    {errors.starts_at && <p className="mt-1 text-sm text-red-600">{errors.starts_at}</p>}
                </div>

                <div>
                    <label htmlFor="ends_at" className="block text-sm font-medium text-gray-700">
                        Ends at
                    </label>
                    <input
                        id="ends_at"
                        type="datetime-local"
                        value={data.ends_at}
                        onChange={(e) => setData('ends_at', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    />
                    {errors.ends_at && <p className="mt-1 text-sm text-red-600">{errors.ends_at}</p>}
                </div>
            </div>

            <div className="flex justify-end gap-2">
                <button
                    type="button"
                    onClick={onCancel}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={processing}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-50"
                >
                    Save
                </button>
            </div>
        </form>
    );
}

export default function Index({ activities }) {
    const { timezone } = usePage().props;
    const [showForm, setShowForm] = useState(false);
    const [editingActivity, setEditingActivity] = useState(null);

    function openCreateForm() {
        setEditingActivity(null);
        setShowForm(true);
    }

    function openEditForm(activity) {
        setEditingActivity(activity);
        setShowForm(true);
    }

    function closeForm() {
        setEditingActivity(null);
        setShowForm(false);
    }

    return (
        <AppLayout>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-900">Activities</h1>
                {!showForm && (
                    <button
                        type="button"
                        onClick={openCreateForm}
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500"
                    >
                        Add Activity
                    </button>
                )}
            </div>

            {showForm && <ActivityForm activity={editingActivity} onCancel={closeForm} />}

            {activities.length === 0 ? (
                <p className="mt-4 text-sm text-gray-500">No activities yet.</p>
            ) : (
                <ul className="mt-4 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white">
                    {activities.map((activity) => (
                        <li key={activity.id} className="p-4">
                            <div className="flex items-baseline justify-between">
                                <h2 className="font-medium text-gray-900">{activity.title}</h2>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-gray-500">
                                        {formatDateTime(activity.starts_at, timezone)} &ndash;{' '}
                                        {formatDateTime(activity.ends_at, timezone)}
                                    </span>
                                    {formatDuration(activity.starts_at, activity.ends_at) && (
                                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                                            {formatDuration(activity.starts_at, activity.ends_at)}
                                        </span>
                                    )}
                                    <button
                                        type="button"
                                        onClick={() => openEditForm(activity)}
                                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                            {activity.description && (
                                <p className="mt-1 text-sm text-gray-600">{activity.description}</p>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </AppLayout>
    );
}
