import AppLayout from "../../Layouts/AppLayout.jsx";
import {useState} from "react";
import {useForm} from "@inertiajs/react";
import {toDatetimeLocalValue, formatDateTime} from '../../utils/toDatetimeLocalValue.js';

function HabitForm({habit, onCancel}) {

    const {data, setData, post, put, processing, errors, reset} = useForm({
        name: habit?.name ?? '',
        order: habit?.order ?? '',
        color: habit?.color ?? '',
        ends_at: habit?.ends_at ? toDatetimeLocalValue(new Date(habit.ends_at)) : '',
    })

    function submit(e) {
        e.preventDefault();

        const options = {
            onSuccess: () => {
                reset();
                onCancel();
            }
        }

        if(habit){
            put(`/habits/${habit.id}`, options)
        }else {
            post(`/habits`,options)
        }
    }

    return (
        <form onSubmit={submit} className="my-4 rounded-md border border-gray-200 bg-white p-4 grid grid-cols-2 gap-6">
            <div>
                <label htmlFor="name" className="block">Name</label>
                <input id="name" type="text"
                       value={data.name}
                       onChange={(e) => setData('name', e.target.value)}
                       className="mt-1"/>
                {errors.name && <p className="mt-1 error">{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="order" className="block">Order</label>
                <input id="order" type="number"
                       value={data.order}
                       onChange={(e) => setData('order', e.target.value)}
                       className="mt-1"/>
                {errors.order && <p className="mt-1 error">{errors.order}</p>}
            </div>

            <div>
                <label htmlFor="ends_at" className="block">Ends at</label>
                <input id="ends_at" type="datetime-local"
                       value={data.ends_at}
                       onChange={(e) => setData('ends_at', e.target.value)}
                       className="mt-1"/>
                {errors.ends_at && <p className="mt-1 error">{errors.ends_at}</p>}
            </div>

            <div>
                <label htmlFor="color" className="block">Color</label>
                <input id="color" type="color"
                       value={data.color}
                       onChange={(e) => setData('color', e.target.value)}
                       className="mt-1"/>
                {errors.color && <p className="mt-1 error">{errors.color}</p>}
            </div>

            <div className="flex justify-end gap-2">
                <button type="button" onClick={onCancel} className="cancel">
                    Cancel
                </button>
                <button type="submit" disabled={processing}>Save</button>
            </div>


        </form>
    )
}

export default function Index({habits}) {

    console.log("habits",habits)
    const [showForm, setShowForm] = useState(false);
    const [editingHabit, setEditingHabit] = useState(null);

    function openCreateForm() {
        setEditingHabit(null);
        setShowForm(true)
    }
    function openEditForm(habit) {
        setEditingHabit(habit)
        setShowForm(true)
    }

    function closeForm() {
        setEditingHabit(null)
        setShowForm(false)
    }

    return (
        <AppLayout>
            <div className="flex items-centr justify-between">
                <h1>Habits</h1>

                {!showForm && (
                    <button type="button" onClick={openCreateForm}>
                        Add Habit
                    </button>
                )}
            </div>


            {showForm && <HabitForm habit={editingHabit} onCancel={closeForm}/>}

            {habits.length === 0 ?
                (
                    <p>No habits yet.</p>
                ) :
                (
                    <ul className="mt-4 divide-y divide-gray-200 rounded-md border border-gray-200 ">
                        {habits.map( (habit) => (
                            <li key={habit.id} className="p-4">
                                <div className="flex items-baseline justify-between">
                                    <h2 className="font-medium text-gray-900">{habit.order ?? ''}) {habit.name}</h2>
                                    <div className="flex items-centr gap-3">
                                        { formatDateTime(habit.ends_at) }
                                    </div>
                                    <button type="button" onClick={() => openEditForm(habit)} className="transparent p-2 text-black" style={habit.color ? { backgroundColor: habit.color } : undefined}>Edit</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )
            }

        </AppLayout>
    )
}
