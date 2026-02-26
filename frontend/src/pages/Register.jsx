import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      setLoading(false)
      return
    }

    const result = await register(name, email, password)
    
    if (result.success) {
      navigate('/')
    } else {
      setError(result.message || 'Registration failed')
    }
    setLoading(false)
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 212, 170, 0.1) 0%, transparent 70%)',
        top: '-20%',
        right: '-10%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245, 166, 35, 0.08) 0%, transparent 70%)',
        bottom: '-20%',
        left: '-10%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          width: '100%',
          maxWidth: '440px',
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
          }}>
            Create Account
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Join the campus community
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1rem',
              background: 'rgba(255, 71, 87, 0.1)',
              border: '1px solid rgba(255, 71, 87, 0.2)',
              borderRadius: 'var(--radius-md)',
              marginBottom: '1.5rem',
              color: 'var(--status-lost)',
              fontSize: '0.9rem',
            }}
          >
            <AlertCircle size={18} />
            {error}
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              marginBottom: '0.5rem',
            }}>
              Full Name
            </label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
              }} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="yosef debebe"
                required
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem 0.875rem 2.75rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.95rem',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease',
                }}
              />
            </div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              marginBottom: '0.5rem',
            }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
              }} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@astu.edu"
                required
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem 0.875rem 2.75rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.95rem',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease',
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              marginBottom: '0.5rem',
            }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
              }} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 6 characters"
                required
                style={{
                  width: '100%',
                  padding: '0.875rem 2.75rem 0.875rem 2.75rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.95rem',
                  color: 'var(--text-primary)',
                  transition: 'all 0.2s ease',
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '0.25rem',
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            style={{
              width: '100%',
              padding: '1rem',
              background: loading 
                ? 'var(--bg-surface)' 
                : 'linear-gradient(135deg, var(--accent-teal) 0%, var(--accent-teal-dim) 100%)',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              fontSize: '1rem',
              fontWeight: 600,
              color: loading ? 'var(--text-muted)' : 'var(--bg-void)',
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: loading ? 'none' : '0 0 25px var(--accent-teal-glow)',
              transition: 'all 0.3s ease',
            }}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </motion.button>
        </form>

        {/* Login Link */}
        <p style={{
          textAlign: 'center',
          marginTop: '1.5rem',
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
        }}>
          Already have an account?{' '}
          <Link to="/login" style={{
            color: 'var(--accent-gold)',
            fontWeight: 500,
          }}>
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  )
}

export default Register
