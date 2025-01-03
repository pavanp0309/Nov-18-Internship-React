import React from 'react'

const SearchBar = ({onSearch}) => {
  return (
    <div className='container search-container my-2'>
        <input type="text" 
        class="form-control p-3 border-success " 
        placeholder="search the Task.."
        onChange={(e)=>onSearch(e.target.value)}/>
    </div>
  )
}

export default SearchBar
