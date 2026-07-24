import React from 'react'

const PriceCard = ({ price, info, icon, bgColor }) => {
  return (
    <div className={`rounded-2xl bg-gradient-to-br ${bgColor} p-5 text-white shadow-sm`}>
      <div className='flex items-start justify-between'>
        <div className='rounded-2xl bg-white/20 p-3 text-xl'>{icon}</div>
        <span className='rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em]'>Live</span>
      </div>
      <p className='mt-6 text-3xl font-semibold'>${price}</p>
      <p className='mt-1 text-sm text-white/80'>{info}</p>
    </div>
  )
}

export default PriceCard