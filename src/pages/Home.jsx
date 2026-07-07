import React from 'react'
import PriceCard from '../components/home/PriceCard'
import { GoCreditCard } from 'react-icons/go'
import { LuShoppingBag } from 'react-icons/lu'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import Histogram from '../components/home/Histogram'
import Accordian from '../components/home/Accordian'
import '../styles/bodyCss.css'

const Home = () => {
  return (
    <div className='p-8 md:p-8'>
      <div className='mb-6'>
        <p className='text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 mb-3'>Dashboard</p>
        <h2 className='text-2xl font-bold text-gray-800'>Welcome back, Adinath</h2>
        <p className='mt-1 text-sm text-gray-500'>Here’s a quick summary of your store performance.</p>
      </div>

      <div className='grid gap-4 xl:grid-cols-3'>
        <PriceCard price={500} info='Total Earning' bgColor='from-blue-600 to-indigo-700' icon={<GoCreditCard />} />
        <PriceCard price={900} info='Total Order' bgColor='from-emerald-500 to-green-600' icon={<LuShoppingBag />} />
        <PriceCard price={1900} info='Total Income' bgColor='from-amber-500 to-orange-500' icon={<FaRegMoneyBillAlt />} />
      </div>

      <div className='mt-6 grid gap-6 xl:grid-cols-[1.45fr_0.85fr]'>
        <div className='rounded-3xl border border-gray-200 bg-white p-4 shadow-sm'>
          <div className='mb-3 flex items-center justify-between'>
            <div>
              <h3 className='text-lg font-semibold text-gray-800'>Sales Overview</h3>
              <p className='text-sm text-gray-500'>Performance across recent months</p>
            </div>
            <span className='rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600'>+12.4%</span>
          </div>
          <Histogram />
        </div>

        <div className='rounded-3xl border border-gray-200 bg-white p-4 shadow-sm'>
          <Accordian />
        </div>
      </div>
    </div>
  )
}

export default Home