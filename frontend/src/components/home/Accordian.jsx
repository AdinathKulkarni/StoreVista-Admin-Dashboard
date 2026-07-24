import React from 'react'
import Options from './Options'

function Accordian() {
  return (
    <div className='flex flex-col'>
      <div className='mb-3'>
        <p className='text-lg font-semibold text-gray-800'>Popular Products</p>
        <p className='text-sm text-gray-500'>Highlights from the current catalog</p>
      </div>

      <div className='mt-2'>
        <Options />
      </div>
    </div>
  )
}

export default Accordian