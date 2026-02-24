import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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

  useEffect(() => {
    if (!isAuthenticated || !isAdmin()) { navigate('/'); return }
    fetchDashboardData()
  }, [isAuthenticated, isAdmin])

  const fetchDashboardData = async () => {
    try {
      const headers = { 'Authorization': `Bearer ${token}` }
      const [itemsRes, claimsRes] = await Promise.all([
        fetch('/api/items', { headers }),
        fetch('/api/claims', { headers })
      ])
      const itemsData = await itemsRes.json()
      const claimsData = await claimsRes.json()
      if (itemsRes.ok) setItems(itemsData)
      if (claimsRes.ok) {
        setClaims(claimsData)
        const pending = claimsData.filter(c => c.status === 'pending').length
        setStats(s => ({ ...s, pendingClaims: pending, totalItems: itemsData?.length || 0, foundItems: itemsData?.filter(i => i.status === 'found').length || 0 }))
      }
    } catch (err) { console.error('Failed to fetch dashboard data') }
    finally { setLoading(false) }
  }

  const handleClaimAction = async (claimId, action) => {
    try {
      const res = await fetch(`/api/claims/${claimId}/${action}`, { method: 'PUT', headers: { 'Authorization': `Bearer ${token}` } })
      if (res.ok) fetchDashboardData()
    } catch (err) { console.error('Failed to process claim') }
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

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {statCards.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
              style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: `${stat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <stat.icon size={22} color={stat.color} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1 }}>{stat.value}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
          {[{ id: 'items', label: 'All Items' }, { id: 'claims', label: 'Pending Claims' }].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{ padding: '0.75rem 1.25rem', background: activeTab === tab.id ? 'rgba(245, 166, 35, 0.1)' : 'transparent', border: 'none', borderRadius: 'var(--radius-sm)', color: activeTab === tab.id ? 'var(--accent-gold)' : 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer' }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'items' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0 }} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
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

        {activeTab === 'claims' && (
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
                      <div><p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Claim for: {claim.item?.title || 'Unknown Item'}</p><p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Claimant: {claim.claimant?.name || 'Unknown'} • {formatDate(claim.dateSubmitted)}</p></div>
                      <span className="badge" style={{ background: 'rgba(255, 71, 87, 0.15)', color: 'var(--status-lost)' }}>Pending</span>
                    </div>
                    <div style={{ marginBottom: '1rem' }}><p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>PROOF OF OWNERSHIP:</p><p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', background: 'var(--bg-elevated)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>{claim.proof}</p></div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <button onClick={() => handleClaimAction(claim._id, 'approve')} style={{ padding: '0.5rem 1rem', background: 'rgba(46, 213, 115, 0.15)', border: '1px solid rgba(46, 213, 115, 0.3)', borderRadius: 'var(--radius-sm)', color: 'var(--status-found)', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} />Approve</button>
                      <button onClick={() => handleClaimAction(claim._id, 'reject')} style={{ padding: '0.5rem 1rem', background: 'rgba(255, 71, 87, 0.15)', border: '1px solid rgba(255, 71, 87, 0.3)', borderRadius: 'var(--radius-sm)', color: 'var(--status-lost)', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><XCircle size={16} />Reject</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
