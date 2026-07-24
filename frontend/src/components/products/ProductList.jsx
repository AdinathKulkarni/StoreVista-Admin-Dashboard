import React from 'react'
import Product from './Product'

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className='w-full'>
      <div className='hidden gap-4 rounded-xl bg-slate-50 px-4 py-3 text-xs uppercase tracking-[0.2em] text-slate-600 lg:grid lg:grid-cols-[2.2fr_1fr_1fr_1fr_auto] font-bold'>
        <p>Name</p>
        <p>Price</p>
        <p>Category</p>
        <p>Date</p>
        <p>Actions</p>
      </div>

      <div className='mt-3 space-y-3'>
        {products.map((product) => (
          <Product key={product.id} product={product} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}

export default ProductList