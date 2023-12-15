"use client"
import React, { useState, ChangeEvent, useEffect } from "react";
import { toast } from "react-toastify";
import { postTask, getTasks } from "../API/ApiService";


// Defining the structure of a task
interface Task {
    title: string;
}

// Component for adding a new task
const AddTask: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>(""); // Input for new task 

    const fetchTasks = async () => {
        try {
            const response = await getTasks();
            if (response.data && Array.isArray(response.data.tasks)) {
                setTasks(response.data.tasks);
            } else {
                console.error('Invalid data structure for tasks:', response.data);
            }
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []); // Invoke fetchTasks() when tasks state changes

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
            // setTasks([...tasks, task]); // Adds new task to the list of tasks
            setTasks((prevTasks) => [...prevTasks, task]);
            console.log(task);
            toast("Task added successfully", { type: "success" });
            setNewTask("");
            window.location.reload();
            // fetchTasks();
        } catch (err) {
            console.error(err);
            toast("Something went wrong", { type: "error" });
        }
    };

    return (
        <div className='flex flex-col w-full p-1 rounded-lg bg-white text-black '>
            <div className='flex w-full justify-center items-center'>
                <input
                    type='text'
                    placeholder='Add new task'
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

            {/* Display the list of tasks
            <div>
                {tasks.map((task, index) => (
                    <div key={index}>{task.title}</div>
                ))}
            </div> */}
        </div>
    );
};

export default AddTask;
