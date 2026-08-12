<?php

namespace App\Http\Controllers;

use App\Models\TrackHabit;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class TrackHabitController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'habit_id' => ['required', 'integer', 'exists:habits,id'],
            'date' => ['required', 'date'],
        ]);

        $trackHabit = new TrackHabit(['habit_id' => $data['habit_id']]);
        $trackHabit->created_at = Carbon::parse($data['date'])->startOfDay();
        $trackHabit->save();

        return redirect()->back();
    }

    public function destroy(TrackHabit $trackHabit): RedirectResponse
    {
        $trackHabit->delete();

        return redirect()->back();
    }
}
