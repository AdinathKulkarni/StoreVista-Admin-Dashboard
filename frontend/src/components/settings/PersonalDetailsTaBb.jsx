import React from 'react'

const PersonalDetailsTab = () => {
  return (
    <div className='grid gap-6 xl:grid-cols-2'>
      <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
        <p className='text-xl font-semibold text-gray-800'>Personal Information</p>
        <div className='mt-4 grid gap-4 md:grid-cols-2'>
          <div className='rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
            <input type='text' placeholder='Name' className='w-full bg-transparent text-sm outline-none' />
          </div>
          <div className='rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
            <input type='text' placeholder='Location' className='w-full bg-transparent text-sm outline-none' />
          </div>
        </div>

        <div className='mt-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
          <textarea placeholder='Bio...' className='min-h-[100px] w-full bg-transparent text-sm outline-none' />
        </div>

        <div className='mt-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
          <select className='w-full bg-transparent text-sm outline-none'>
            <option value='SuperUser'>Super User</option>
            <option value='Manager'>Manager</option>
            <option value='Admin'>Admin</option>
            <option value='User'>User</option>
          </select>
        </div>
      </div>

      <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
        <p className='text-xl font-semibold text-gray-800'>Contact Information</p>
        <div className='mt-4 grid gap-4 md:grid-cols-2'>
          <div className='rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
            <input type='text' placeholder='Contact Phone' className='w-full bg-transparent text-sm outline-none' />
          </div>
          <div className='rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
            <input type='email' placeholder='Email' className='w-full bg-transparent text-sm outline-none' />
          </div>
        </div>

        <div className='mt-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
          <input type='text' placeholder='Profile Url' className='w-full bg-transparent text-sm outline-none' />
        </div>

        <div className='mt-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
          <textarea placeholder='Address' className='min-h-[100px] w-full bg-transparent text-sm outline-none' />
        </div>
      </div>
    </div>
  )
}

export default PersonalDetailsTab