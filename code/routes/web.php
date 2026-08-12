<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\HabitController;
use App\Http\Controllers\TrackHabitController;
use App\Models\Activity;
use App\Models\TrackHabit;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Habit;

Route::get('/', function () {
    $rangeStart = today()->subDays(14)->startOfDay();

    $activitiesByDate = Activity::whereDate('starts_at', '>=', $rangeStart)
        ->whereNotNull(['starts_at', 'ends_at'])
        ->get()
        ->groupBy(fn (Activity $activity) => $activity->starts_at->toDateString());

    $totalMinutesWeek = ["lastWeek" => 0,"weekBefore" => 0];

    $lastDays = collect(range(0, 15))->map(function (int $daysAgo) use ($activitiesByDate, &$totalMinutesWeek) {
        $date = today()->subDays($daysAgo);
        $dayActivities = $activitiesByDate->get($date->toDateString(), collect());

        $totalMinutes = $dayActivities->sum(
            fn (Activity $activity) => $activity->starts_at->diffInMinutes($activity->ends_at)
        );


        //dump("daysAgo",$daysAgo,$totalMinutes);
        if ($daysAgo > 0 && $daysAgo <= 7){
            $totalMinutesWeek['lastWeek']+= $totalMinutes;
        }else if($daysAgo > 7) {
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

    $monthStart = today()->startOfMonth();

    $days = collect(range(1, today()->daysInMonth))->map(
        fn (int $day) => $monthStart->copy()->day($day)->format('Y-m-d')
    );

    $trackHabitsByHabitAndDate = TrackHabit::whereBetween('created_at', [$monthStart, $monthStart->copy()->endOfMonth()])
        ->get()
        ->groupBy(fn (TrackHabit $trackHabit) => $trackHabit->habit_id.'-'.$trackHabit->created_at->format('Y-m-d'));

    $habitGrid = Habit::orderBy('order')->get()->map(function (Habit $habit) use ($days, $trackHabitsByHabitAndDate) {
        return [
            'id' => $habit->id,
            'name' => $habit->name,
            'color' => $habit->color,
            'tracks' => $days->mapWithKeys(function (string $date) use ($habit, $trackHabitsByHabitAndDate) {
                return [$date => $trackHabitsByHabitAndDate->get("{$habit->id}-{$date}")?->first()?->id];
            }),
        ];
    });

    //dd($totalMinutesWeek);
    return Inertia::render('Dashboard', [
        'lastDays' => $lastDays,
        'hoursLastWeek' => sprintf("%dh %dm", intdiv($totalMinutesWeek['lastWeek'], 60), $totalMinutesWeek['lastWeek'] % 60),
        'hoursWeekBefore' => sprintf("%dh %dm", intdiv($totalMinutesWeek['weekBefore'], 60), $totalMinutesWeek['weekBefore'] % 60),
        'days' => $days,
        'habitGrid' => $habitGrid,
    ]);
})->name('dashboard');

Route::resource('activities', ActivityController::class)->only(['index', 'store', 'update']);
Route::resource('habits',HabitController::class)->only(['index','store','update']);
Route::resource('track-habits', TrackHabitController::class)->only(['store', 'destroy']);
