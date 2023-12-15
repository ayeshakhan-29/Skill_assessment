"use client"
import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { getTasks, updateTask, deleteTask } from '../API/ApiService';
import moment from "moment";
import Todos from "./Todos";

interface Task {
    _id: string;
    title: string;
    isComplete: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    timeStamp: any;
    // Add other properties as per your task structure
}

const TaskComponent: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
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

        fetchTasks();
    }, []);

    const handleUpdateTask = async (id: string) => {
        try {
            const updatedTasks = tasks.map((task) =>
                task._id === id ? { ...task, isComplete: !task.isComplete } : task
            );

            setTasks(updatedTasks); // Update the local state immediately for a responsive UI

            // Update the task status in the backend
            await updateTask(id, !tasks.find((task) => task._id === id)?.isComplete);
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleDeleteTask = async (id: string) => {
        try {
            // Delete the task in the backend
            await deleteTask(id);

            // Remove the deleted task from the local state
            const updatedTasks = tasks.filter((task) => task._id !== id);
            setTasks(updatedTasks);

            toast('Task deleted successfully', { type: 'success' });
        } catch (error) {
            console.error('Error deleting task:', error);
            toast('Something went wrong', { type: 'error' });
        }
    };

    return (
        <div className="w-full">
            <div className="bg-white opacity-90 mt-2 overflow-y-scroll w-full h-64 bg-opacity-70 rounded">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div key={task._id}>
                            <Todos task={task}
                                handleDeleteTask={handleDeleteTask}
                                handleUpdateTask={handleUpdateTask} />
                        </div>
                    ))
                ) : (
                    <div className="rounded bg-white p-4 shadow">No tasks available</div>
                )}
            </div>
        </div>
    );
};

export default TaskComponent;
