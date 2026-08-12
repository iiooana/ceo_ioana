<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;
use App\Models\Habit;
use Inertia\Inertia;

class HabitController extends Controller
{
    public function index(): Response
    {
        //dd(Habit::orderBy('created_at','desc')->get());
        return Inertia::render('Habits/Index',[
           'habits' =>  Habit::orderBy('order')->orderBy('created_at','desc')->get()
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        Habit::create($this->validated($request));

        return redirect()->back();
    }

    public function update(Request $request, Habit $habit): RedirectResponse
    {
        $habit->update($this->validated($request));

       return redirect()->back();
    }

    public function destroy(Habit $habit): RedirectResponse
    {
        $habit->delete();

        return redirect()->back();
    }

    private function validated(Request $request): array
    {
        return $request->validate([
           'name' => ['required','string','max:500'],
           'order' => ['nullable','integer'],
           'color' => ['nullable','string'],
           'ends_at' => ['nullable','date'],
        ]);
    }
}
