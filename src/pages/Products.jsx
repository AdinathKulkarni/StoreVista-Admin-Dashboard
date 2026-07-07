import React, { useState, useEffect } from 'react'
import { FiPlus, FiX } from 'react-icons/fi'
import Input from '../components/products/Input'
import ProductList from '../components/products/ProductList'
import Spinner from '../components/products/Spinner'

const Products = () => {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    date: ''
  })

  async function fetchApi() {
    setLoading(true)
    try {
      const apiUrl = 'https://6a2e4d5ac9776ca6c0c47b77.mockapi.io/Products'
      const data = await fetch(apiUrl)
      const res = await data.json()
      setProducts(res)
    } catch (error) {
      console.log('Error while loading data')
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  const filteredProducts = products.filter((product) => {
    const searchValue = query.toLowerCase()
    return (
      product.name?.toLowerCase().includes(searchValue) ||
      product.category?.toLowerCase().includes(searchValue)
    )
  })

  const openCreateModal = () => {
    setEditingProduct(null)
    setFormData({ name: '', price: '', category: '', date: '' })
    setIsModalOpen(true)
  }

  const openEditModal = (product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      date: product.date
    })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingProduct(null)
    setFormData({ name: '', price: '', category: '', date: '' })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name.trim() || !formData.category.trim() || !formData.price) {
      return
    }

    const parsedPrice = Number(formData.price)

    if (Number.isNaN(parsedPrice) || parsedPrice <= 0) {
      return
    }

    const payload = {
      name: formData.name.trim(),
      price: parsedPrice,
      category: formData.category.trim(),
      date: formData.date || new Date().toISOString()
    }

    if (editingProduct) {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editingProduct.id ? { ...product, ...payload } : product
        )
      )
    } else {
      const newProduct = {
        id: `${Date.now()}`,
        ...payload
      }
      setProducts((prev) => [newProduct, ...prev])
    }

    closeModal()
  }

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id))
  }

  return (
    <div className='p-4 md:p-6'>
      <div className='rounded-3xl border border-gray-200 bg-white p-5 shadow-sm'>
        <div className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 mb-2'>Inventory</p>
            <h2 className='text-2xl font-bold text-gray-800'>Product Management</h2>
            {/* <p className='mt-1 text-sm text-gray-500'>Add, edit, and remove products without losing the current search experience.</p> */}
          </div>

          <div className='flex flex-col gap-3 sm:flex-row'>
            <div className='w-full sm:w-[300px] rounded-xl border border-gray-300 bg-gray-50 px-3 py-2 focus-within:border-blue-500 focus-within:bg-white'>
              <Input query={query} setQuery={setQuery} />
            </div>
            <button
              onClick={openCreateModal}
              className='flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-2.5 font-medium text-white transition hover:bg-gray-800'
            >
              <FiPlus />
              Add Product
            </button>
          </div>
        </div>

        <div className='mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3'>
          <div className='rounded-2xl bg-slate-50 p-4'>
            <p className='text-sm text-gray-500'>Total products</p>
            <p className='mt-1 text-2xl font-semibold text-gray-800'>{products.length}</p>
          </div>
          <div className='rounded-2xl bg-slate-50 p-4'>
            <p className='text-sm text-gray-500'>Visible results</p>
            <p className='mt-1 text-2xl font-semibold text-gray-800'>{filteredProducts.length}</p>
          </div>
          <div className='rounded-2xl bg-slate-50 p-4'>
            <p className='text-sm text-gray-500'>Search term</p>
            <p className='mt-1 text-2xl font-semibold text-gray-800'>{query ? query : 'All'}</p>
          </div>
        </div>

        <div className='mt-6'>
          {products.length === 0 ? (
            <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-gray-600'>
              {/* <p className='text-lg font-semibold'>No products at the moment 😢</p> */}
              {/* <p className='mt-1'>Start by adding your first product above.</p> */}
              <Spinner />
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-gray-600'>
              <p className='text-lg font-semibold'>No matching products</p>
              <p className='mt-1'>Try a different keyword or clear the search.</p>
            </div>
          ) : (
            <ProductList loading={loading} products={filteredProducts} onEdit={openEditModal} onDelete={handleDelete} />
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4'>
          <div className='w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl'>
            <div className='flex items-start justify-between'>
              <div>
                <p className='text-sm font-semibold uppercase tracking-[0.25em] text-blue-600'>Product form</p>
                <h3 className='text-xl font-semibold text-gray-800'> {editingProduct ? 'Edit Product' : 'Add New Product'} </h3>
              </div>
              <button onClick={closeModal} className='rounded-full p-2 text-gray-500 hover:bg-gray-100'>
                <FiX />
              </button>
            </div>

            <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
              <div>
                <label className='mb-1 block text-sm font-medium text-gray-700'>Product Name</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:border-blue-500'
                  placeholder='Enter product name'
                />
              </div>

              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <div>
                  <label className='mb-1 block text-sm font-medium text-gray-700'>Price</label>
                  <input
                    type='number'
                    name='price'
                    value={formData.price}
                    onChange={handleChange}
                    className='w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:border-blue-500'
                    placeholder='0'
                    min='1'
                  />
                </div>
                <div>
                  <label className='mb-1 block text-sm font-medium text-gray-700'>Category</label>
                  <input
                    type='text'
                    name='category'
                    value={formData.category}
                    onChange={handleChange}
                    className='w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:border-blue-500'
                    placeholder='e.g. Electronics'
                  />
                </div>
              </div>

              <div>
                <label className='mb-1 block text-sm font-medium text-gray-700'>Date</label>
                <input
                  type='date'
                  name='date'
                  value={formData.date ? formData.date.slice(0, 10) : ''}
                  onChange={handleChange}
                  className='w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:border-blue-500'
                />
              </div>

              <div className='flex justify-end gap-3 pt-2'>
                <button type='button' onClick={closeModal} className='rounded-xl border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100'>Cancel</button>
                <button type='submit' className='rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'>Save Product</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products