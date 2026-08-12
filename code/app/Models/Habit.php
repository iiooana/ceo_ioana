<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable('name','color','order','ends_at')]
class Habit extends Model
{
    protected function casts(): array
    {
        return [
            'order' => 'integer',
            'ends_at' => 'datetime',
        ];
    }

    public function trackHabits(): HasMany
    {
        return $this->hasMany(TrackHabit::class);
    }
}
