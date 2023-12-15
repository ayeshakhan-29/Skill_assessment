"use client"
import React, { useState, ChangeEvent } from "react";
import { toast } from "react-toastify";
import { postTask } from "../API/ApiService";

// Defining the structure of a task
interface Task {
    title: string;
}

// Component for adding a new task
const AddTask: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>(""); // Input for new task t

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);  // Update the new task input value
    };

    // Function to handle adding a new task
    const handleAddTask = async () => {
        if (!newTask.trim()) {
            // To check if the new task input is empty
            toast("Please enter a task", { type: "error" });
            return;
        }

        try {
            const res = await postTask(newTask);
            const { task } = res.data;
            setTasks([...tasks, task]); // Adds new task to the list of tasks
            toast("Task added successfully", { type: "success" });
            setNewTask("");
        } catch (err) {
            console.error(err);
            toast("Something went wrong", { type: "error" });
        }
    };

    return (
        <div className='flex mb-4 w-full p-2 rounded bg-white text-black '>
            <input
                type='text'
                placeholder='Enter a new task'
                value={newTask}
                onChange={handleInputChange}
                className='flex-grow p-2 mr-2 bg-white focus:outline-none'
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleAddTask();
                }}
            />
            <button
                onClick={handleAddTask}
                className='flex-shrink-0 p-2 bg-[#bbb18c] text-white rounded hover:bg-[#d8d2bd]'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className='w-6 h-6 text-[#91856b]'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                    />
                </svg>
            </button>
        </div>
    );
};

export default AddTask;
