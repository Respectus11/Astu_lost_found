import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Package, CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

const AdminDashboard = () => {
  const { isAuthenticated, isAdmin, token } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('items')
  const [stats, setStats] = useState({ totalItems: 0, lostItems: 0, foundItems: 0, claimedItems: 0, pendingClaims: 0 })
  const [items, setItems] = useState([])
  const [claims, setClaims] = useState([])
  const [loading, setLoading] = useState(true)
  const [adminForm, setAdminForm] = useState({ name: '', email: '', password: '' })
  const [adminLoading, setAdminLoading] = useState(false)
  const [adminMessage, setAdminMessage] = useState('')

  useEffect(() => {
    if (!isAuthenticated || !isAdmin()) { navigate('/'); return }
    fetchDashboardData()
  }, [isAuthenticated, isAdmin])

  const fetchDashboardData = async () => {
    try {
      const headers = { 'Authorization': `Bearer ${token}` }
      const [itemsRes, claimsRes, statsRes] = await Promise.all([
        fetch('http://localhost:5000/api/items', { headers }),
        fetch('http://localhost:5000/api/claims', { headers }),
        fetch('http://localhost:5000/api/dashboard', { headers })
      ])
      const itemsData = await itemsRes.json()
      const claimsData = await claimsRes.json()
      const statsData = await statsRes.json()
      
      if (itemsRes.ok) setItems(itemsData)
      if (claimsRes.ok) setClaims(claimsData)
      if (statsRes.ok) setStats(statsData)
    } catch (err) { 
    }
    finally { setLoading(false) }
  }

  const handleClaimAction = async (claimId, action, collectionInstructions) => {
    try {
      const body = collectionInstructions ? { collectionInstructions } : undefined
      const res = await fetch(`http://localhost:5000/api/admin/claims/${claimId}/${action}`, { 
        method: 'PUT', 
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : undefined
      })
      if (res.ok) fetchDashboardData()
    } catch (err) { 
    }
  }

  const handleAdminSubmit = async (e) => {
    e.preventDefault()
    setAdminLoading(true)
    setAdminMessage('')

    try {
      const res = await fetch('http://localhost:5000/api/auth/register-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(adminForm)
      })

      const data = await res.json()

      if (res.ok) {
        setAdminMessage('Admin user created successfully!')
        setAdminForm({ name: '', email: '', password: '' })
        // Optionally fetch updated data or show success
      } else {
        setAdminMessage(data.message || 'Failed to create admin user')
      }
    } catch (err) {
      setAdminMessage('An error occurred while creating the admin user')
    } finally {
      setAdminLoading(false)
    }
  }

  const handleAdminInputChange = (e) => {
    setAdminForm({
      ...adminForm,
      [e.target.name]: e.target.value
    })
  }

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', paddingTop: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '40px', height: '40px', border: '3px solid var(--border-medium)', borderTopColor: 'var(--accent-gold)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  const statCards = [
    { label: 'Total Items', value: stats.totalItems, icon: Package, color: 'var(--accent-gold)' },
    { label: 'Lost', value: stats.lostItems, icon: AlertCircle, color: 'var(--status-lost)' },
    { label: 'Found', value: stats.foundItems, icon: CheckCircle, color: 'var(--status-found)' },
    { label: 'Pending Claims', value: stats.pendingClaims, icon: Clock, color: 'var(--accent-teal)' },
  ]

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '4rem' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <Shield size={28} color="var(--accent-teal)" />
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text-primary)' }}>Admin Dashboard</h1>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>Manage items, claims, and verify ownership</p>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {statCards.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
              {/* Decorative background */}
              <div style={{ 
                position: 'absolute', 
                top: '-50%', 
                right: '-50%', 
                width: '200%', 
                height: '200%', 
                background: `${stat.color}20`, 
                borderRadius: '50%', 
                filter: 'blur(20px)',
                zIndex: 0
              }} />
              
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-md)', background: `${stat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${stat.color}30` }}>
                  <stat.icon size={24} color={stat.color} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1, marginBottom: '0.25rem' }}>{stat.value}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Admin Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>Claim Status</h3>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-teal)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Approved</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--status-found)' }}>{stats.claimedItems || 0}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Rejected</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--status-lost)' }}>{stats.rejectedClaims || 0}</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>Success Rate</h3>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ flex: 1 }}>
                <div style={{ height: '8px', background: 'var(--bg-surface)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ 
                    height: '100%', 
                    background: 'linear-gradient(90deg, var(--accent-gold), var(--accent-teal))',
                    width: `${stats.totalItems > 0 ? Math.round((stats.claimedItems / stats.totalItems) * 100) : 0}%`,
                    transition: 'width 0.5s ease'
                  }} />
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  {stats.totalItems > 0 ? Math.round((stats.claimedItems / stats.totalItems) * 100) : 0}% Items Reunited
                </p>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-gold)' }}>
                {stats.totalItems > 0 ? Math.round((stats.claimedItems / stats.totalItems) * 100) : 0}%
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>Quick Actions</h3>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link to="/admin" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'rgba(0, 212, 170, 0.1)',
                    border: '1px solid rgba(0, 212, 170, 0.3)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--accent-teal)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  📊 View All Statistics
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Admin Summary */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          style={{ background: 'linear-gradient(135deg, rgba(245, 166, 35, 0.1), rgba(0, 212, 170, 0.1))', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                Admin Summary
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                You have successfully managed {stats.totalItems} items and processed {stats.pendingClaims + (stats.claimedItems || 0) + (stats.rejectedClaims || 0)} claims.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>System Health</p>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--status-found)' }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--status-found)', fontWeight: 600 }}>Excellent</span>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)',
                  fontSize: '0.85rem',
                  fontWeight: 500
                }}
              >
                Admin Panel Active
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Admin Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
          {[{ id: 'items', label: 'All Items' }, { id: 'pending-claims', label: 'Pending Claims' }, { id: 'user-claims', label: 'All Claims' }, { id: 'add-admin', label: 'Add Admin' }].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{ padding: '0.75rem 1.25rem', background: activeTab === tab.id ? 'rgba(245, 166, 35, 0.1)' : 'transparent', border: 'none', borderRadius: 'var(--radius-sm)', color: activeTab === tab.id ? 'var(--accent-gold)' : 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer' }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'items' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>ITEM</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>STATUS</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>LOCATION</th>
                    <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>DATE</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item._id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '1rem' }}><p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{item.title}</p><p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.category}</p></td>
                      <td style={{ padding: '1rem' }}><span className={`badge badge-${item.status}`}>{item.status}</span></td>
                      <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.location}</td>
                      <td style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>{formatDate(item.dateReported)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'pending-claims' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            {claims.filter(c => c.status === 'pending').length === 0 ? (
              <div style={{ padding: '3rem', textAlign: 'center' }}>
                <CheckCircle size={48} color="var(--accent-teal)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>All Caught Up!</h3>
                <p style={{ color: 'var(--text-muted)' }}>No pending claims to review.</p>
              </div>
            ) : (
              <div style={{ padding: '1rem' }}>
                {claims.filter(c => c.status === 'pending').map((claim) => (
                  <div key={claim._id} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div>
                        <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Claim for: {claim.item?.title || 'Unknown Item'}</p>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Claimant: {claim.claimant?.name || 'Unknown'} • {formatDate(claim.dateSubmitted)}</p>
                      </div>
                      <span className="badge" style={{ background: 'rgba(255, 71, 87, 0.15)', color: 'var(--status-lost)' }}>Pending</span>
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>PROOF OF OWNERSHIP:</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', background: 'var(--bg-elevated)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>{claim.proof}</p>
                    </div>
                    
                    {/* Collection Instructions Form */}
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                        Collection Instructions (optional)
                      </label>
                      <textarea
                        id={`instructions-${claim._id}`}
                        placeholder="e.g., Visit admin office during business hours with student ID..."
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-subtle)',
                          background: 'var(--bg-surface)',
                          color: 'var(--text-primary)',
                          fontSize: '0.9rem',
                          minHeight: '60px',
                          resize: 'vertical'
                        }}
                      />
                    </div>
                    
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <button 
                        onClick={() => {
                          const instructions = document.getElementById(`instructions-${claim._id}`).value;
                          handleClaimAction(claim._id, 'approve', instructions);
                        }}
                        style={{ padding: '0.5rem 1rem', background: 'rgba(46, 213, 115, 0.15)', border: '1px solid rgba(46, 213, 115, 0.3)', borderRadius: 'var(--radius-sm)', color: 'var(--status-found)', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CheckCircle size={16} />Approve
                      </button>
                      <button onClick={() => handleClaimAction(claim._id, 'reject')} style={{ padding: '0.5rem 1rem', background: 'rgba(255, 71, 87, 0.15)', border: '1px solid rgba(255, 71, 87, 0.3)', borderRadius: 'var(--radius-sm)', color: 'var(--status-lost)', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><XCircle size={16} />Reject</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'user-claims' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            {claims.length === 0 ? (
              <div style={{ padding: '3rem', textAlign: 'center' }}>
                <AlertCircle size={48} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>No Claims Found</h3>
                <p style={{ color: 'var(--text-muted)' }}>No claims have been submitted yet.</p>
              </div>
            ) : (
              <div style={{ padding: '1rem' }}>
                {claims.map((claim) => {
                  const getStatusConfig = (status) => {
                    switch (status) {
                      case 'pending':
                        return { color: 'var(--accent-teal)', icon: Clock, label: 'Pending' }
                      case 'approved':
                        return { color: 'var(--status-found)', icon: CheckCircle, label: 'Approved' }
                      case 'rejected':
                        return { color: 'var(--status-lost)', icon: XCircle, label: 'Rejected' }
                      default:
                        return { color: 'var(--text-muted)', icon: AlertCircle, label: 'Unknown' }
                    }
                  }
                  
                  const statusConfig = getStatusConfig(claim.status)
                  const Icon = statusConfig.icon
                  
                  return (
                    <div key={claim._id} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                            <Icon size={18} color={statusConfig.color} />
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: statusConfig.color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{statusConfig.label}</span>
                          </div>
                          <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Claim for: {claim.item?.title || 'Unknown Item'}</p>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Claimant: {claim.claimant?.name || 'Unknown'} • {formatDate(claim.dateSubmitted)}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Item Status: <span className={`badge badge-${claim.item?.status}`}>{claim.item?.status || 'Unknown'}</span></p>
                          {claim.reviewedBy && (
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Reviewed by: {claim.reviewedBy.name}</p>
                          )}
                        </div>
                      </div>
                      <div style={{ marginBottom: '1rem' }}>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>PROOF OF OWNERSHIP:</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', background: 'var(--bg-elevated)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>{claim.proof}</p>
                      </div>
                      
                      {/* Status-specific content */}
                      {claim.status === 'approved' && (
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ background: 'rgba(46, 213, 115, 0.1)', border: '1px solid rgba(46, 213, 115, 0.3)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', marginBottom: '1rem' }}>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                            <strong>Ready for Collection!</strong> This claim has been approved.
                          </p>
                          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: 'rgba(245, 166, 35, 0.1)', border: '1px solid rgba(245, 166, 35, 0.2)', borderRadius: 'var(--radius-sm)', padding: '0.5rem' }}>
                            <strong>Collection Instructions:</strong> Visit the admin office during business hours (8:00 AM - 5:00 PM, Monday-Friday) with student ID to collect the item.
                          </div>
                        </motion.div>
                      )}
                      
                      {claim.status === 'rejected' && (
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ background: 'rgba(255, 71, 87, 0.1)', border: '1px solid rgba(255, 71, 87, 0.3)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', marginBottom: '1rem' }}>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            This claim was rejected. The admin team determined the proof was insufficient.
                          </p>
                        </motion.div>
                      )}
                      
                      {claim.status === 'pending' && (
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ background: 'rgba(0, 212, 170, 0.1)', border: '1px solid rgba(0, 212, 170, 0.3)', borderRadius: 'var(--radius-sm)', padding: '0.75rem', marginBottom: '1rem' }}>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            This claim is currently being reviewed by the admin team.
                          </p>
                        </motion.div>
                      )}

                      {claim.status === 'pending' && (
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                          <button onClick={() => handleClaimAction(claim._id, 'approve')} style={{ padding: '0.5rem 1rem', background: 'rgba(46, 213, 115, 0.15)', border: '1px solid rgba(46, 213, 115, 0.3)', borderRadius: 'var(--radius-sm)', color: 'var(--status-found)', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} />Approve</button>
                          <button onClick={() => handleClaimAction(claim._id, 'reject')} style={{ padding: '0.5rem 1rem', background: 'rgba(255, 71, 87, 0.15)', border: '1px solid rgba(255, 71, 87, 0.3)', borderRadius: 'var(--radius-sm)', color: 'var(--status-lost)', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><XCircle size={16} />Reject</button>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'add-admin' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <Shield size={24} color="var(--accent-teal)" />
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>Add New Admin</h2>
            </div>
            
            {adminMessage && (
              <div style={{ 
                padding: '1rem', 
                borderRadius: 'var(--radius-sm)', 
                marginBottom: '1.5rem',
                background: adminMessage.includes('successfully') ? 'rgba(46, 213, 115, 0.15)' : 'rgba(255, 71, 87, 0.15)',
                border: `1px solid ${adminMessage.includes('successfully') ? 'rgba(46, 213, 115, 0.3)' : 'rgba(255, 71, 87, 0.3)'}`,
                color: adminMessage.includes('successfully') ? 'var(--status-found)' : 'var(--status-lost)'
              }}>
                {adminMessage}
              </div>
            )}

            <form onSubmit={handleAdminSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={adminForm.name}
                  onChange={handleAdminInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    background: 'var(--bg-surface)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem'
                  }}
                  placeholder="Enter admin full name"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={adminForm.email}
                  onChange={handleAdminInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    background: 'var(--bg-surface)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem'
                  }}
                  placeholder="admin@astu.edu.et"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={adminForm.password}
                  onChange={handleAdminInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    background: 'var(--bg-surface)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem'
                  }}
                  placeholder="Enter secure password"
                />
              </div>

              <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button
                  type="submit"
                  disabled={adminLoading}
                  style={{
                    padding: '0.75rem 2rem',
                    background: 'var(--accent-teal)',
                    border: 'none',
                    borderRadius: 'var(--radius-sm)',
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: adminLoading ? 'not-allowed' : 'pointer',
                    opacity: adminLoading ? 0.7 : 1
                  }}
                >
                  {adminLoading ? 'Creating Admin...' : 'Create Admin User'}
                </button>
                
                <button
                  type="button"
                  onClick={() => setAdminForm({ name: '', email: '', password: '' })}
                  style={{
                    padding: '0.75rem 2rem',
                    background: 'transparent',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Clear Form
                </button>
              </div>
            </form>

            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Admin Privileges</h3>
              <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <li>• Create and manage admin users</li>
                <li>• Approve/reject item claims</li>
                <li>• View all items and claims</li>
                <li>• Access system statistics and reports</li>
              </ul>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1rem', fontStyle: 'italic' }}>
                Note: Only existing admins can create new admin users. This ensures proper access control.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
