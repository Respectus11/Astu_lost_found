import { createContext, useContext, useState, useEffect } from 'react'
import api from '../services/api'

const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (token && storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [token])

  const login = async (email, password) => {
    try {
      // Input validation
      if (!email || !password) {
        return { success: false, message: 'Please provide both email and password' }
      }

      const response = await api.post('/auth/login', { email, password })
      
      if (response.data) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        setToken(response.data.token)
        setUser(response.data.user)
        return { success: true }
      }
      
      return { success: false, message: response.data.message || 'Invalid credentials' }
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Network error. Please check your connection and try again.' }
    }
  }

  const register = async (name, email, password) => {
    try {
      // Input validation
      if (!name || !email || !password) {
        return { success: false, message: 'Please provide all required fields' }
      }

      if (password.length < 6) {
        return { success: false, message: 'Password must be at least 6 characters long' }
      }

      const response = await api.post('/auth/register', { name, email, password })
      
      if (response.data) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        setToken(response.data.token)
        setUser(response.data.user)
        return { success: true }
      }
      
      return { success: false, message: response.data.message || 'Registration failed' }
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Network error. Please check your connection and try again.' }
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setToken(null)
    setUser(null)
  }

  const isAdmin = () => {
    return user?.role === 'admin'
  }

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    isAdmin,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
