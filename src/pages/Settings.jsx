import React from 'react'
import Tabs from '../components/settings/Tabs'

const Settings = () => {
  return (
    <div className='p-8 md:p-8'>
      <div className='mb-5'>
        <p className='text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 mb-3'>Account Settings</p>
        <h2 className='text-2xl font-bold text-gray-800'>Manage your profile and preferences</h2>
        <p className='mt-1 text-sm text-gray-500'>Update your personal details, security settings, and account preferences in one place.</p>
      </div>
      <Tabs />
    </div>
  )
}

export default Settings