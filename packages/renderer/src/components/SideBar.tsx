import React from 'react'
import DateWidget from './widgets/DateWidget'
import TimeWidget from './widgets/TimeWidget'
import { createDraggable } from '@neodrag/solid';


const SideBar = () => {
    const { draggable } = createDraggable();  
  return (
    <div class="border-l-2 bg-opacity-5 bg-black p-4 float-right w-3/12 h-screen">
        <TimeWidget />
    </div>
  )
}

export default SideBar