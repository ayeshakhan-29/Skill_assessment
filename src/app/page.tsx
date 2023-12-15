import React from 'react'
import AddTask from './Components/AddNewTask'
import Profile from "./Components/Profile"
import Task from './Components/Task'
import TodoHeader from "./Components/TodoHeader"
import "../app/global.module.css"

export default function Home() {


  return (
    <>
      <div className='flex items-center justify-center h-screen w-screen'>
        <div className='absolute w-4/5 md:w-3/5 lg:w-2/5 flex flex-col items-center justify-around'>
          <Profile />
          <AddTask />
          <TodoHeader />
          <Task />
        </div>
      </div>
    </>
  )
}
