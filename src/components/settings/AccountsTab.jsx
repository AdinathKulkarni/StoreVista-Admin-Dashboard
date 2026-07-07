import React from 'react'
import SliderButton from './SliderButton'

const AccountsTab = () => {
  return (
    <div className='space-y-6'>
      <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
        <p className='text-xl font-semibold text-gray-800'>General Settings</p>
        <div className='mt-4 grid gap-4 md:grid-cols-2'>
          <div className='rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
            <input type='text' placeholder='Username' className='w-full bg-transparent text-sm outline-none' />
          </div>
          <div className='rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
            <input type='email' placeholder='Email' className='w-full bg-transparent text-sm outline-none' />
          </div>
        </div>

        <div className='mt-4 grid gap-4 md:grid-cols-2'>
          <div className='rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
            <select className='w-full bg-transparent text-sm outline-none'>
              <option value='SuperUser'>Super User</option>
              <option value='Manager'>Manager</option>
              <option value='Admin'>Admin</option>
              <option value='User'>User</option>
            </select>
          </div>
          <div className='rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
            <select className='w-full bg-transparent text-sm outline-none'>
              <option value='US'>United States</option>
              <option value='IND'>India</option>
              <option value='Ger'>Germany</option>
            </select>
          </div>
        </div>
      </div>

      <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
        <p className='text-xl font-semibold text-gray-800'>Advanced Settings</p>
        <p className='mt-1 text-sm text-gray-500'>Assign responsibilities for your team members.</p>
        <div className='mt-4 space-y-3'>
          <SliderButton label='Adinath K.' />
          <SliderButton label='Prasad R.' />
          <SliderButton label='Rushik R.' />
        </div>
      </div>
    </div>
  )
}

export default AccountsTab