<?php

use App\Http\Controllers\ActivityController;
use App\Models\Activity;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $todayActivities = Activity::whereDate('starts_at', today())->whereNotNull(['starts_at','ends_at'])->get();

    $totalMinutes = $todayActivities->sum(
        fn (Activity $activity) => $activity->starts_at->diffInMinutes($activity->ends_at)
    );

    return Inertia::render('Dashboard', [
        'today' => today()->format('l, F j, Y'),
        'todayActivitiesCount' => $todayActivities->count(),
        'todayActivitiesDuration' => sprintf('%dh %dm', intdiv($totalMinutes, 60), $totalMinutes % 60),
    ]);
})->name('dashboard');

Route::resource('activities', ActivityController::class)->only(['index', 'store', 'update']);
