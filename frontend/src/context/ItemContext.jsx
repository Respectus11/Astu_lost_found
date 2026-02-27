import { createContext, useContext, useState } from 'react'
import { useAuth } from './AuthContext'
import api from '../services/api'

const ItemContext = createContext(null)

export const useItems = () => {
  const context = useContext(ItemContext)
  if (!context) {
    throw new Error('useItems must be used within an ItemProvider')
  }
  return context
}

export const ItemProvider = ({ children }) => {
  const { token } = useAuth()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchItems = async (filters = {}) => {
    setLoading(true)
    setError(null)
    try {
      const response = await api.get('/items', { params: filters })
      setItems(response.data)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch items')
    } finally {
      setLoading(false)
    }
  }

  const reportItem = async (itemData) => {
    setLoading(true)
    setError(null)
    try {
      const response = await api.post('/items', itemData)
      if (response.data) {
        setItems(prev => [response.data, ...prev])
        return { success: true, item: response.data }
      }
      return { success: false, message: response.data?.message || 'Failed to report item' }
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Network error. Please check your connection.' }
    } finally {
      setLoading(false)
    }
  }

  const claimItem = async (itemId, proof) => {
    setLoading(true)
    setError(null)
    try {
      const response = await api.post('/claims', { itemId, proof })
      if (response.data) {
        return { success: true, claim: response.data }
      }
      return { success: false, message: response.data?.message || 'Failed to submit claim' }
    } catch (err) {
      return { success: false, message: err.response?.data?.message || 'Network error. Please check your connection.' }
    } finally {
      setLoading(false)
    }
  }

  const getItemById = async (id) => {
    try {
      const response = await api.get(`/items/${id}`)
      return response.data
    } catch (err) {
      return null
    }
  }

  const getUserClaims = async () => {
    try {
      const response = await api.get('/claims')
      return response.data
    } catch (err) {
      return []
    }
  }

  const value = {
    items,
    loading,
    error,
    fetchItems,
    reportItem,
    claimItem,
    getItemById,
    getUserClaims,
    setItems
  }

  return (
    <ItemContext.Provider value={value}>
      {children}
    </ItemContext.Provider>
  )
}
