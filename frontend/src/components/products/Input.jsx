import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const Input = ({ query, setQuery }) => {
  const changeHandler = (event) => {
    setQuery(event.target.value)
  }

  return (
    <div className='flex items-center gap-2'>
      <div className='text-xl text-gray-500'>
        <IoIosSearch />
      </div>
      <input
        className='w-full bg-transparent text-sm text-gray-700 outline-none'
        type='text'
        placeholder='Search products'
        value={query}
        onChange={changeHandler}
      />
    </div>
  )
}

export default Input