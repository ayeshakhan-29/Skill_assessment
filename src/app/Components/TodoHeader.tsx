import React from 'react'
import ListIcon from '../../../public/icons/ListIcon'
import ChevronIcon from "../../../public/icons/ChevronIcon"

const TodoHeader = () => {
    return (

        <div className='w-full h-14 flex items-center border-2 border-gray-200 flex-row px-2 rounded bg-[#a08a71] bg-opacity-90 '>
            <ListIcon className='w-6 h-6' />
            <span className='text-white ml-3'>Your Todos</span>
            <ChevronIcon className='w-6 h-6 ml-auto cursor-pointer' />
        </div>

    )
}

export default TodoHeader
