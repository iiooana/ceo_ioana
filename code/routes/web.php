<?php

use App\Http\Controllers\ActivityController;
use App\Models\Activity;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $rangeStart = today()->subDays(14)->startOfDay();

    $activitiesByDate = Activity::whereDate('starts_at', '>=', $rangeStart)
        ->whereNotNull(['starts_at', 'ends_at'])
        ->get()
        ->groupBy(fn (Activity $activity) => $activity->starts_at->toDateString());

    $last7Days = collect(range(0, 14))->map(function (int $daysAgo) use ($activitiesByDate) {
        $date = today()->subDays($daysAgo);
        $dayActivities = $activitiesByDate->get($date->toDateString(), collect());

        $totalMinutes = $dayActivities->sum(
            fn (Activity $activity) => $activity->starts_at->diffInMinutes($activity->ends_at)
        );

        return [
            'label' => match ($daysAgo) {
                0 => 'Today',
                1 => 'Yesterday',
                default => $date->format('l'),
            },
            'date' => $date->format('l, F j, Y'),
            'count' => $dayActivities->count(),
            'duration' => sprintf('%dh %dm', intdiv($totalMinutes, 60), $totalMinutes % 60),
        ];
    });

    return Inertia::render('Dashboard', [
        'last7Days' => $last7Days,
    ]);
})->name('dashboard');

Route::resource('activities', ActivityController::class)->only(['index', 'store', 'update']);
