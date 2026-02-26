import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import { useItems } from '../context/ItemContext.jsx'

const categories = [
  { value: 'ID Card', label: 'ID Card' },
  { value: 'Electronics', label: 'Electronics' },
  { value: 'Books', label: 'Books' },
  { value: 'Clothing', label: 'Clothing' },
  { value: 'Other', label: 'Other' },
]

const locations = [
  'Stadium (futsal)', 'Cafe', 'borchamu Building', 'central library',
    'applied library', 'females library', 'Geda gate', 'Other',]

const ReportLost = () => {
  const [formData, setFormData] = useState({
    title: '', description: '', category: '', location: '',
    dateReported: new Date().toISOString().split('T')[0],
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const { isAuthenticated } = useAuth()
  const { reportItem } = useItems()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isAuthenticated) { navigate('/login'); return }
    setError('')
    setLoading(true)
    const result = await reportItem({ ...formData, status: 'lost' })
    if (result.success) { setSuccess(true); setTimeout(() => navigate('/'), 2000) }
    else { setError(result.message || 'Failed to report item') }
    setLoading(false)
  }

  if (success) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '3rem' }}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}
            style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(0, 212, 170, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
            <CheckCircle size={40} color="var(--accent-teal)" />
          </motion.div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>Report Submitted!</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Your lost item report has been recorded.</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '4rem' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--status-lost)', textTransform: 'uppercase' }}>Lost Something?</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.5rem' }}>Report Lost Item</h1>
          </div>
          {error && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: 'rgba(255, 71, 87, 0.1)', border: '1px solid rgba(255, 71, 87, 0.2)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', color: 'var(--status-lost)' }}><AlertCircle size={18} />{error}</motion.div>}
          <form onSubmit={handleSubmit}>
            <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Item Name *</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="e.g., Scientific Calculator" required style={{ width: '100%', padding: '0.875rem 1rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', fontSize: '0.95rem', color: 'var(--text-primary)' }} />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Category *</label>
                <select name="category" value={formData.category} onChange={handleChange} required style={{ width: '100%', padding: '0.875rem 1rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', fontSize: '0.95rem', color: 'var(--text-primary)', cursor: 'pointer' }}>
                  <option value="">Select a category</option>
                  {categories.map((cat) => <option key={cat.value} value={cat.value}>{cat.label}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Last Seen Location *</label>
                <select name="location" value={formData.location} onChange={handleChange} required style={{ width: '100%', padding: '0.875rem 1rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', fontSize: '0.95rem', color: 'var(--text-primary)', cursor: 'pointer' }}>
                  <option value="">Select location</option>
                  {locations.map((loc) => <option key={loc} value={loc}>{loc}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Date Lost *</label>
                <input type="date" name="dateReported" value={formData.dateReported} onChange={handleChange} required style={{ width: '100%', padding: '0.875rem 1rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', fontSize: '0.95rem', color: 'var(--text-primary)' }} />
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Detailed Description *</label>
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Describe your item in detail..." required rows={5} style={{ width: '100%', padding: '0.875rem 1rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', fontSize: '0.95rem', color: 'var(--text-primary)', resize: 'vertical', minHeight: '120px' }} />
              </div>
              <motion.button type="submit" disabled={loading} whileHover={{ scale: loading ? 1 : 1.02 }} whileTap={{ scale: loading ? 1 : 0.98 }}
                style={{ width: '100%', padding: '1rem', background: loading ? 'var(--bg-surface)' : 'linear-gradient(135deg, var(--status-lost) 0%, #cc3a47 100%)', border: 'none', borderRadius: 'var(--radius-md)', fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', cursor: loading ? 'not-allowed' : 'pointer', boxShadow: loading ? 'none' : '0 0 25px rgba(255, 71, 87, 0.3)' }}>
                {loading ? 'Submitting...' : 'Report Lost Item'}
              </motion.button>
            </div>
            {!isAuthenticated && <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Need to sign in? <Link to="/login" style={{ color: 'var(--accent-gold)' }}>Sign in</Link></p>}
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default ReportLost
