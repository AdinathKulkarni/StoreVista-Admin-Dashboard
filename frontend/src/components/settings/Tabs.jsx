import React, { useState } from 'react'
import ProfileTab from './ProfileTab'
import PersonalDetailsTab from './PersonalDetailsTaBb'
import ChangePasswordTab from './ChangePasswordTab'
import AccountsTab from './AccountsTab'

const Tabs = () => {
  const tabData = [
    { id: 'profile', label: 'Profile' },
    { id: 'personalDetails', label: 'Personal Details' },
    { id: 'myAcc', label: 'My Account' },
    { id: 'chngPwd', label: 'Change Password' }
  ]

  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className='rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-6'>
      <div className='flex flex-wrap gap-2 rounded-2xl bg-slate-50 p-2'>
        {tabData.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                isActive ? 'bg-black text-white shadow-sm' : 'text-slate-600 hover:bg-white hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className='mt-6'>
        {activeTab === 'profile' && <ProfileTab />}
        {activeTab === 'personalDetails' && <PersonalDetailsTab />}
        {activeTab === 'myAcc' && <AccountsTab />}
        {activeTab === 'chngPwd' && <ChangePasswordTab />}
      </div>
    </div>
  )
}

export default Tabs