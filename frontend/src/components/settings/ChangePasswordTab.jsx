import React from 'react'

const ChangePasswordTab = () => {
  return (
    <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
      <p className='text-xl font-semibold text-gray-800'>Change Password</p>
      <p className='mt-1 text-sm text-gray-500'>Keep your account secure by updating your password regularly.</p>

      <div className='mt-6 space-y-4'>
        <div className='rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
          <input type='password' placeholder='Current Password' className='w-full bg-transparent text-sm outline-none' />
        </div>

        <div className='grid gap-4 md:grid-cols-2'>
          <div className='rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
            <input type='password' placeholder='New Password' className='w-full bg-transparent text-sm outline-none' />
          </div>
          <div className='rounded-xl border border-slate-200 bg-slate-50 px-3 py-2'>
            <input type='password' placeholder='Confirm Password' className='w-full bg-transparent text-sm outline-none' />
          </div>
        </div>

        <button className='rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black'>Update Password</button>
      </div>
    </div>
  )
}

export default ChangePasswordTab