import React from 'react'
import { Link, useLocation } from 'react-router'
import { FaHome } from 'react-icons/fa'
import { IoSettingsSharp } from 'react-icons/io5'
import { FaCartShopping } from 'react-icons/fa6'
import { SiSimpleanalytics } from 'react-icons/si'

const navItems = [
  { to: '/', label: 'Home', icon: <FaHome /> },
  { to: '/products', label: 'Products', icon: <FaCartShopping /> },
  { to: '/analytics', label: 'Analytics', icon: <SiSimpleanalytics /> },
  { to: '/settings', label: 'Settings', icon: <IoSettingsSharp /> }
]

const Sidebar = () => {
  const location = useLocation()

  return (
    <div className='fixed top-16 bottom-0 left-0 flex w-[240px] flex-col border-r border-slate-200 bg-slate-50 p-4'>
      <div className='mb-6 rounded-2xl border border-slate-200 bg-white px-3 py-4 shadow-sm'>
        <p className='text-xs font-semibold uppercase tracking-[0.25em] text-slate-500'>Workspace</p>
        <p className='mt-1 text-base font-semibold text-slate-800'>StoreVista</p>
      </div>

      <nav className='space-y-1'>
        {navItems.map((item) => {
          const isActive = location.pathname === item.to
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-white hover:text-slate-900'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className='mt-auto rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-600 shadow-sm'>
        <p className='font-semibold text-slate-800'>Quick access</p>
        <p className='mt-1 text-xs'>Manage store items and reports efficiently.</p>
      </div>
    </div>
  )
}

export default Sidebar