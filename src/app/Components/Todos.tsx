"use client"
import React, { useState } from 'react'
import checked from '../../../public/icons/checklist.png';
import checkedGreen from '../../../public/icons/checkedGreen.png';
import DotIcon from '../../../public/icons/DotIcon';
import Image from 'next/image';
import moment from "moment";

interface TodoProps {
    task: {
        _id: string;
        title: string;
        isComplete: boolean;
        createdAt: string;
        // Add other properties as per your task structure
    };
    handleUpdateTask: (id: string) => void;
    handleDeleteTask: (id: string) => void;
}


const Todos: React.FC<TodoProps> = ({ task, handleUpdateTask, handleDeleteTask }) => {
    const [showInfo, setShowInfo] = useState(false);
    const formattedCreatedAt = moment(task.createdAt).format('YYYY-MM-DD hh:mm A');

    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };
    return (
        <div>
            <div
                className=" rounded w-full bg-white p-4 shadow text-black cursor-pointer"
            >
                <div className="flex justify-between items-center ">
                    <div className="flex items-center">
                        <Image
                            src={task?.isComplete ? checkedGreen : checked}
                            alt="check Icon"
                            className="w-6 h-6"
                            onClick={() => handleUpdateTask(task._id)}
                        />
                        <span className="ml-3">{task.title}</span>
                    </div>
                    <DotIcon onClick={toggleInfo} />
                </div>


                {showInfo && (
                    <div className='flex flex-col items-start p-5 bg-white bg-opacity-90 '>
                        <span>
                            Completed: {task?.isComplete ? "Completed" : "Not Completed"}{" "}
                        </span>
                        <span>
                            Created At: {formattedCreatedAt}
                        </span>

                        <button
                            onClick={() => handleDeleteTask(task._id)}
                            className='bg-red-100 rounded w-full mt-4 hover:bg-red-500 text-red-500 hover:text-white font-bold py-2 px-4 transition duration-300 ease-in-out'
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Todos
