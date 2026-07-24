import React from 'react'
import '../../styles/bodyCss.css'

const Spinner = () => {
  return (
    <div className='flex flex-col items-center justify-center font-bold'>
      <div className='loader mb-6'></div>
      <p>L O A D I N G</p>
    </div>
  )
}

export default Spinner