import React from 'react'
import { FiBell } from 'react-icons/fi'

const NavBar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-5 backdrop-blur-sm'>
      <div>
        <h1 className='text-lg font-semibold text-slate-800'>StoreVista</h1>
        <p className='text-xs text-slate-500'>Product dashboard</p>
      </div>

      <div className='flex items-center gap-2'>
        <button className='rounded-full p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-800 bg-slate-200'>
          <FiBell />
        </button>
        <img
          src='/src/assets/DSC09745 (1).jpg'
          alt='Profile'
          className='h-9 w-9 rounded-full object-cover border border-slate-200'
        />
      </div>
    </div>
  )
}

export default NavBar