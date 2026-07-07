import React from 'react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

const Product = ({ product, onEdit, onDelete }) => {
  const apiDate = product.date
  const formattedDate = new Date(apiDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <div className='rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md lg:grid lg:grid-cols-[2.2fr_1fr_1fr_1fr_auto] lg:items-center'>
      <div className='flex items-center gap-3'>
        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700'>
          {product.name?.charAt(0)?.toUpperCase() || 'P'}
        </div>
        <div>
          <p className='font-semibold text-gray-800'>{product.name}</p>
          <p className='text-sm text-gray-500'>SKU #{product.id}</p>
        </div>
      </div>

      <div className='mt-3 lg:mt-0'>
        {/* <p className='text-xs uppercase tracking-[0.2em] text-slate-400'>Price</p> */}
        <p className='font-semibold text-gray-800'>${Number(product.price).toLocaleString()}</p>
      </div>

      <div className='mt-3 lg:mt-0'>
        {/* <p className='text-xs uppercase tracking-[0.2em] text-slate-400'>Category</p> */}
        <span className='mt-1 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700'>
          {product.category}
        </span>
      </div>

      <div className='mt-3 lg:mt-0'>
        {/* <p className='text-xs uppercase tracking-[0.2em] text-slate-400'>Date</p> */}
        <p className='font-medium text-gray-700'>{formattedDate}</p>
      </div>

      <div className='mt-4 flex gap-2 lg:mt-0'>
        <button
          onClick={() => onEdit(product)}
          className='flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100'
        >
          <FiEdit2 />
          {/* Edit */}
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className='flex items-center gap-1 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600 transition hover:bg-red-100'
        >
          <FiTrash2 />
          {/* Delete */}
        </button>
      </div>
    </div>
  )
}

export default Product