import { createContext, useContext, useState } from 'react'
import { useAuth } from './AuthContext'

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
      const params = new URLSearchParams(filters)
      const response = await fetch(`/api/items?${params}`)
      const data = await response.json()
      
      if (response.ok) {
        setItems(data)
      } else {
        setError(data.message)
      }
    } catch (err) {
      setError('Failed to fetch items')
    } finally {
      setLoading(false)
    }
  }

  const reportItem = async (itemData) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(itemData)
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setItems(prev => [data, ...prev])
        return { success: true, item: data }
      }
      
      return { success: false, message: data.message }
    } catch (err) {
      return { success: false, message: 'Network error' }
    } finally {
      setLoading(false)
    }
  }

  const claimItem = async (itemId, proof) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/claims', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ item: itemId, proof })
      })
      
      const data = await response.json()
      
      if (response.ok) {
        return { success: true, claim: data }
      }
      
      return { success: false, message: data.message }
    } catch (err) {
      return { success: false, message: 'Network error' }
    } finally {
      setLoading(false)
    }
  }

  const getItemById = async (id) => {
    try {
      const response = await fetch(`/api/items/${id}`)
      const data = await response.json()
      return response.ok ? data : null
    } catch (err) {
      return null
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
    setItems
  }

  return (
    <ItemContext.Provider value={value}>
      {children}
    </ItemContext.Provider>
  )
}
