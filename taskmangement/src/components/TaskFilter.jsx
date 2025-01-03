import React from 'react'

const TaskFilter = ({onsetFilter}) => {
  return (
    <div className='container task-filter-container my-2'>
       <div className='filter-btns'>
       <button className='btn btn-outline-secondary p-3 ' onClick={()=>onsetFilter("All")}>All</button>
       <button className='btn btn-outline-success p-3 mx-1' onClick={()=>onsetFilter("Completed")}>Completed</button>
       <button className='btn btn-outline-danger p-3' onClick={()=>onsetFilter("Pending")}>Pending</button>
       </div>

    </div>
  )
}

export default TaskFilter
