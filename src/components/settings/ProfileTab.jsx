import React from 'react'
import { MdEmail, MdOutlinePhoneAndroid } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'

const ProfileTab = () => {
  return (
    <div className='grid gap-6 xl:grid-cols-[1.1fr_0.9fr]'>
      <div className='rounded-2xl border border-slate-200 bg-blue-50 p-6 text-white shadow-sm'>
        <div className='flex items-center gap-4'>
          <img
            src='/src/assets/DSC09745 (1).jpg'
            alt='Profile'
            className='h-14 w-14 rounded-full border-2 border-white object-cover shadow-sm'
          />
          <div>
            <p className='text-2xl font-bold text-black'>Adinath K.</p>
            <p className='text-sm text-black'>Programmer Analyst Trainee</p>
          </div>
        </div>

        <div className='mt-6 space-y-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm text-black'>
          <div className='flex items-center gap-3'>
            <MdEmail className='text-lg' />
            <p>adinathkulkarni86@gmail.com</p>
          </div>
          <div className='flex items-center gap-3'>
            <MdOutlinePhoneAndroid className='text-lg' />
            <p>+91 9999999999</p>
          </div>
          <div className='flex items-center gap-3'>
            <IoLocationSharp className='text-lg' />
            <p>Maharashtra, India</p>
          </div>
        </div>
      </div>

      <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
        <p className='text-xl font-semibold text-gray-800'>About Me</p>
        <p className='mt-3 text-sm leading-6 text-gray-600'>I am Adinath Kulkarni, currently working at Cognizant as a Programmer Analyst Trainee. I am actively learning React.js and building modern UI experiences.</p>

        <div className='mt-6 rounded-2xl bg-slate-50 p-4'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-500'>Details</p>
          <div className='mt-3 grid grid-cols-2 gap-3 text-sm text-gray-700'>
            <p className='text-slate-500'>Name</p>
            <p>Adinath</p>
            <p className='text-slate-500'>Full Name</p>
            <p>Adinath Kulkarni</p>
            <p className='text-slate-500'>Email</p>
            <p>adinathkulkarni86@gmail.com</p>
            <p className='text-slate-500'>Address</p>
            <p>Maharashtra, India</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileTab