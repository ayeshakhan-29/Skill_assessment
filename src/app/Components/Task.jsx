'use client'
import React, { useState } from "react";

function TaskList() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: true },
        { id: 3, title: "Task 3", completed: false },
        // Add more tasks as needed
    ]);

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => {
                                setTasks((prevTasks) =>
                                    prevTasks.map((t) =>
                                        t.id === task.id ? { ...t, completed: !t.completed } : t
                                    )
                                );
                            }}
                        />
                        <span
                            style={{ textDecoration: task.completed ? "line-through" : "none" }}
                        >
                            {task.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
