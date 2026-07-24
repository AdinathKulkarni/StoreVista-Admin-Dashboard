import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'
import { BarChart } from '@mui/x-charts/BarChart'
import { PieChart } from '@mui/x-charts/PieChart'

const Analytics = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const revenue = [12000, 14500, 13800, 16800, 18200, 20500]
  const orders = [120, 135, 128, 150, 160, 174]

  const categoryData = [
    { id: 0, value: 38, label: 'Electronics' },
    { id: 1, value: 24, label: 'Fashion' },
    { id: 2, value: 18, label: 'Home' },
    { id: 3, value: 20, label: 'Accessories' },
  ]

  return (
    <div className='p-6 md:p-8 space-y-6'>
      <div className='flex flex-col gap-2'>
        <p className='text-sm font-semibold uppercase tracking-[0.25em] text-blue-600'>Performance Overview</p>
        <h1 className='text-3xl font-bold text-gray-800'>Analytics Dashboard</h1>
        <p className='text-gray-600'>Track revenue, customer activity, and product performance in one view.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='rounded-2xl border border-gray-200 bg-white p-5 shadow-sm'>
          <p className='text-sm text-gray-500'>Total Revenue</p>
          <p className='mt-2 text-3xl font-bold text-gray-800'>$84.2K</p>
          <p className='mt-1 text-sm text-green-600'>+12.4% from last month</p>
        </div>
        <div className='rounded-2xl border border-gray-200 bg-white p-5 shadow-sm'>
          <p className='text-sm text-gray-500'>Orders</p>
          <p className='mt-2 text-3xl font-bold text-gray-800'>1,248</p>
          <p className='mt-1 text-sm text-green-600'>+8.1% from last month</p>
        </div>
        <div className='rounded-2xl border border-gray-200 bg-white p-5 shadow-sm'>
          <p className='text-sm text-gray-500'>Customer Retention</p>
          <p className='mt-2 text-3xl font-bold text-gray-800'>68%</p>
          <p className='mt-1 text-sm text-amber-600'>Steady growth</p>
        </div>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-[1.7fr_1fr] gap-6'>
        <div className='rounded-2xl border border-gray-200 bg-white p-4 shadow-sm'>
          <div className='mb-4 flex items-center justify-between'>
            <div>
              <h2 className='text-lg font-semibold text-gray-800'>Revenue Trend</h2>
              <p className='text-sm text-gray-500'>Monthly sales performance</p>
            </div>
          </div>
          <LineChart
            xAxis={[{ data: months, scaleType: 'point' }]}
            series={[
              { data: revenue, label: 'Revenue', color: '#4f46e5' },
              { data: orders, label: 'Orders', color: '#10b981' },
            ]}
            width={700}
            height={300}
            margin={{ left: 50, right: 20, top: 20, bottom: 30 }}
          />
        </div>

        <div className='rounded-2xl border border-gray-200 bg-white p-4 shadow-sm'>
          <div className='mb-4'>
            <h2 className='text-lg font-semibold text-gray-800'>Sales by Category</h2>
            <p className='text-sm text-gray-500'>Top categories this quarter</p>
          </div>
          <PieChart
            series={[{ data: categoryData, innerRadius: 45, outerRadius: 95, paddingAngle: 2 }]} 
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6'>
        <div className='rounded-2xl border border-gray-200 bg-white p-4 shadow-sm'>
          <div className='mb-4'>
            <h2 className='text-lg font-semibold text-gray-800'>Monthly Comparison</h2>
            <p className='text-sm text-gray-500'>Revenue vs orders over the last 6 months</p>
          </div>
          <BarChart
            xAxis={[{ data: months, scaleType: 'band' }]}
            series={[
              { data: revenue, label: 'Revenue', color: '#3b82f6' },
              { data: orders, label: 'Orders', color: '#f59e0b' },
            ]}
            width={650}
            height={300}
            margin={{ left: 50, right: 20, top: 20, bottom: 30 }}
          />
        </div>

        <div className='rounded-2xl border border-gray-200 bg-white p-4 shadow-sm'>
          <h2 className='text-lg font-semibold text-gray-800'>Key Insights</h2>
          <ul className='mt-4 space-y-3 text-sm text-gray-600'>
            <li className='rounded-lg bg-blue-50 p-3'>Electronics remains the highest-performing category.</li>
            <li className='rounded-lg bg-green-50 p-3'>Revenue is trending upward with strong mid-year growth.</li>
            <li className='rounded-lg bg-amber-50 p-3'>Order volume increased steadily across all months.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Analytics