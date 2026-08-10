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

    $totalMinutesWeek = ["lastWeek" => 0,"weekBefore" => 0];

    $lastDays = collect(range(0, 14))->map(function (int $daysAgo) use ($activitiesByDate, &$totalMinutesWeek) {
        $date = today()->subDays($daysAgo);
        $dayActivities = $activitiesByDate->get($date->toDateString(), collect());

        $totalMinutes = $dayActivities->sum(
            fn (Activity $activity) => $activity->starts_at->diffInMinutes($activity->ends_at)
        );


        //dump("daysAgo",$daysAgo,$totalMinutes);
        if ($daysAgo < 8){
            $totalMinutesWeek['lastWeek']+= $totalMinutes;
        }else {
            $totalMinutesWeek['weekBefore']+= $totalMinutes;
        }

        return [
            'label' => match ($daysAgo) {
                0 => 'Today',
                1 => 'Yesterday',
                default => $date->format('l'),
            },
            'date' => $date->format('l, F j, Y'),
            'count' => $dayActivities->count(),
            'duration' => sprintf('%dh %dm', intdiv($totalMinutes, 60), $totalMinutes % 60),
            'firstStartsAt' => $dayActivities->min('starts_at')?->format('g:i A'),
            'lastEndsAt' => $dayActivities->max('ends_at')?->format('g:i A'),
        ];
    });

    //dd($totalMinutesWeek);
    return Inertia::render('Dashboard', [
        'lastDays' => $lastDays,
        'hoursLastWeek' => sprintf("%dh %dm", intdiv($totalMinutesWeek['lastWeek'], 60), $totalMinutesWeek['lastWeek'] % 60),
        'hoursWeekBefore' => sprintf("%dh %dm", intdiv($totalMinutesWeek['weekBefore'], 60), $totalMinutesWeek['weekBefore'] % 60)
    ]);
})->name('dashboard');

Route::resource('activities', ActivityController::class)->only(['index', 'store', 'update']);
