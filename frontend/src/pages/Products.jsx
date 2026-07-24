import React, { useState, useEffect } from 'react'
import { FiPlus, FiX } from 'react-icons/fi'
import Input from '../components/products/Input'
import ProductList from '../components/products/ProductList'
import Spinner from '../components/products/Spinner'

const API_BASE_URL = 'http://localhost:8080/api/products'

const Products = () => {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [products, setProducts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    date: '',
    sku: ''
  })

  async function fetchProducts() {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(API_BASE_URL)
      if (!response.ok) {
        throw new Error('Failed to load products')
      }
      const data = await response.json()
      setProducts(data)
    } catch (err) {
      console.error('Error while loading data', err)
      setError('Unable to load products. Make sure the backend is running.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const filteredProducts = products.filter((product) => {
    const searchValue = query.toLowerCase()
    return (
      product.name?.toLowerCase().includes(searchValue) ||
      product.category?.toLowerCase().includes(searchValue) ||
      product.sku?.toLowerCase().includes(searchValue)
    )
  })

  const openCreateModal = () => {
    setEditingProduct(null)
    setFormData({ name: '', price: '', category: '', date: '', sku: '' })
    setError('')
    setIsModalOpen(true)
  }

  const openEditModal = (product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      date: product.date,
      sku: product.sku
    })
    setError('')
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingProduct(null)
    setFormData({ name: '', price: '', category: '', date: '', sku: '' })
    setError('')
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formData.name.trim() || !formData.category.trim() || !formData.price || !formData.sku.trim()) {
      setError('Name, price, category, and SKU are required.')
      return
    }

    const parsedPrice = Number(formData.price)

    if (Number.isNaN(parsedPrice) || parsedPrice <= 0) {
      setError('Price must be a number greater than zero.')
      return
    }

    const payload = {
      name: formData.name.trim(),
      price: parsedPrice,
      category: formData.category.trim(),
      date: formData.date || new Date().toISOString().slice(0, 10),
      sku: formData.sku.trim()
    }

    setSubmitting(true)
    setError('')

    try {
      const url = editingProduct ? `${API_BASE_URL}/${editingProduct.id}` : API_BASE_URL
      const method = editingProduct ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}))
        const message = errorBody.error || 'Failed to save product'
        throw new Error(message)
      }

      await fetchProducts()
      closeModal()
    } catch (err) {
      console.error('Error saving product', err)
      setError(err.message || 'Failed to save product')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, { method: 'DELETE' })
      if (!response.ok) {
        throw new Error('Failed to delete product')
      }
      setProducts((prev) => prev.filter((product) => product.id !== id))
    } catch (err) {
      console.error('Error deleting product', err)
      setError('Failed to delete product')
    }
  }

  return (
    <div className='p-4 md:p-6'>
      <div className='rounded-3xl border border-gray-200 bg-white p-5 shadow-sm'>
        <div className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 mb-2'>Inventory</p>
            <h2 className='text-2xl font-bold text-gray-800'>Product Management</h2>
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

        {error && !isModalOpen && (
          <div className='mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700'>
            {error}
          </div>
        )}

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
          {loading ? (
            <div className='flex h-48 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50'>
              <Spinner />
            </div>
          ) : products.length === 0 ? (
            <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-gray-600'>
              <p className='text-lg font-semibold'>No products yet</p>
              <p className='mt-1'>Start by adding your first product above.</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className='rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-gray-600'>
              <p className='text-lg font-semibold'>No matching products</p>
              <p className='mt-1'>Try a different keyword or clear the search.</p>
            </div>
          ) : (
            <ProductList products={filteredProducts} onEdit={openEditModal} onDelete={handleDelete} />
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

            {error && (
              <div className='mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700'>
                {error}
              </div>
            )}

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

              <div>
                <label className='mb-1 block text-sm font-medium text-gray-700'>SKU</label>
                <input
                  type='text'
                  name='sku'
                  value={formData.sku}
                  onChange={handleChange}
                  className='w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:border-blue-500'
                  placeholder='e.g. EL-001'
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
                    step='0.01'
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
                <button
                  type='submit'
                  disabled={submitting}
                  className='rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60'
                >
                  {submitting ? 'Saving...' : 'Save Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products
