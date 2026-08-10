import AppLayout from '../Layouts/AppLayout';

export default function Dashboard({ lastDays, hoursLastWeek, hoursWeekBefore }) {
    return (
        <AppLayout>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Dashboard</h1>
            <p>Last 7 days: <strong>{hoursLastWeek}</strong></p>
            <p>Week before: <strong>{hoursWeekBefore}</strong></p>

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
