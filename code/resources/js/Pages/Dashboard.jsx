import AppLayout from '../Layouts/AppLayout';

export default function Dashboard({ last7Days }) {
    return (
        <AppLayout>
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

            <div className="mt-4 flex flex-wrap gap-4">
                {last7Days.map((day) => (
                    <div key={day.date} className="w-xs rounded-md border border-gray-200 bg-white p-4">
                        <h2 className="text-sm font-medium text-gray-500">{day.label}</h2>
                        <p className="mt-1 text-sm text-gray-600">{day.date}</p>
                        <p className="mt-2 text-3xl font-semibold text-gray-900">{day.count}</p>
                        <p className="mt-1 text-sm text-gray-600">Total duration: {day.duration}</p>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
}
