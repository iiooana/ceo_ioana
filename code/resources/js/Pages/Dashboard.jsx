import AppLayout from '../Layouts/AppLayout';

export default function Dashboard({ today, todayActivitiesCount, todayActivitiesDuration }) {
    return (
        <AppLayout>
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

            <div className="mt-4 max-w-xs rounded-md border border-gray-200 bg-white p-4">
                <h2 className="text-sm font-medium text-gray-500">Activity today</h2>
                <p className="mt-1 text-sm text-gray-600">{today}</p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">{todayActivitiesCount}</p>
                <p className="mt-1 text-sm text-gray-600">Total duration: {todayActivitiesDuration}</p>
            </div>
        </AppLayout>
    );
}
