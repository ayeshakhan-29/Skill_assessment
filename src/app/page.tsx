import Image from 'next/image'
import AddTask from './Components/AddNewTask'
import TaskList from "./Components/Task"
import Profile from "./Components/Profile"
import Todos from "./Components/Todos"
import TodoHeader from "./Components/TodoHeader"

export default function Home() {
  return (
    <>
      <div className=' bg-slate-400  flex items-center justify-center h-screen w-screen'>
        <div className='absolute w-4/5 md:w-3/5 lg:w-2/5 flex flex-col items-center justify-around'>
          <Profile />
          <AddTask />
          <TaskList />
          <TodoHeader />
          <Todos />
        </div>
      </div>
    </>
  )
}
