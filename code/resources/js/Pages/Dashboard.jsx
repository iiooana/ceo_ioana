import { router } from '@inertiajs/react';
import AppLayout from '../Layouts/AppLayout';

function toggleTrack(habitId, date, trackId) {
    if (trackId) {
        router.delete(`/track-habits/${trackId}`, { preserveScroll: true });
    } else {
        router.post('/track-habits', { habit_id: habitId, date }, { preserveScroll: true });
    }
}

function HabitGrid({ days, habitGrid }) {
    if (habitGrid.length === 0) {
        return <p className="mt-4">No habits yet.</p>;
    }

    return (
        <div className="mt-4 overflow-x-auto rounded-md border border-gray-200 bg-white">
            <table className="border-collapse">
                <thead>
                    <tr>
                        <th className="sticky left-0 bg-white p-2 text-left text-sm font-medium text-gray-500">Habit</th>
                        {days.map((date) => (
                            <th key={date} className="p-1 text-xs font-medium text-gray-500">
                                {new Date(date).getDate()}
                            </th>
                        ))}
                        <th className="p-2 text-xs font-medium text-gray-500">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {habitGrid.map((habit) => {
                        const total = days.filter((date) => habit.tracks[date]).length;

                        return (
                            <tr key={habit.id} className="border-t border-gray-100">
                                <td className="sticky left-0 whitespace-nowrap bg-white p-2 text-sm font-medium text-gray-900">
                                    {habit.name}
                                </td>
                                {days.map((date) => {
                                    const trackId = habit.tracks[date];

                                    return (
                                        <td key={date} className="p-1 text-center">
                                            <button
                                                type="button"
                                                onClick={() => toggleTrack(habit.id, date, trackId)}
                                                className="h-6 w-6 rounded"
                                                style={{
                                                    backgroundColor: trackId ? habit.color || '#4f46e5' : '#f3f4f6',
                                                }}
                                            />
                                        </td>
                                    );
                                })}
                                <td className="p-2 text-center text-sm font-semibold text-gray-900">{total}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default function Dashboard({ lastDays, hoursLastWeek, hoursWeekBefore, days, habitGrid }) {
    return (
        <AppLayout>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Dashboard</h1>
            <p>Last 7 days: <strong>{hoursLastWeek}</strong></p>
            <p>Week before: <strong>{hoursWeekBefore}</strong></p>

            <HabitGrid days={days} habitGrid={habitGrid} />

            <div className="mt-4 flex flex-wrap gap-4">
                {lastDays.map((day) => (
                    <div key={day.date} className="w-xs rounded-md border border-gray-200 bg-white p-4">
                        <h2 className="text-sm font-medium text-gray-500">{day.label} - {day.firstStartsAt} - {day.lastEndsAt}</h2>
                        <p className="mt-1 text-sm text-gray-600">{day.date}</p>
                        <p className="mt-2 text-3xl font-semibold text-gray-900">{day.count}</p>
                        <p className="mt-1 text-sm text-gray-600">Total duration: <span className="text-blue-800 font-semibold">{day.duration}</span></p>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}
