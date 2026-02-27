import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, AlertCircle, CheckCircle, XCircle, MapPin, Calendar, Image, Clock } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import { useItems } from '../context/ItemContext.jsx'

const ClaimItem = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isAuthenticated, user } = useAuth()
  const { getItemById, claimItem, getUserClaims } = useItems()
  
  const [item, setItem] = useState(null)
  const [proof, setProof] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [userClaims, setUserClaims] = useState([])
  const [claimsLoading, setClaimsLoading] = useState(true)
  const [userClaimForItem, setUserClaimForItem] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const itemData = await getItemById(id)
      setItem(itemData)
      setLoading(false)
      
      if (isAuthenticated) {
        const claimsData = await getUserClaims()
        setUserClaims(claimsData)
        setClaimsLoading(false)
        
        // Find if user has a claim for this specific item
        const claimForItem = claimsData.find(claim => claim.item?._id === id)
        setUserClaimForItem(claimForItem)
      } else {
        setClaimsLoading(false)
      }
    }
    fetchData()
  }, [id, isAuthenticated])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isAuthenticated) { navigate('/login'); return }
    setError('')
    setSubmitting(true)
    const result = await claimItem(id, proof)
    if (result.success) { setSuccess(true) }
    else { setError(result.message || 'Failed to submit claim') }
    setSubmitting(false)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', paddingTop: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '40px', height: '40px', border: '3px solid var(--border-medium)', borderTopColor: 'var(--accent-gold)', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    )
  }

  if (!item) {
    return (
      <div style={{ minHeight: '100vh', paddingTop: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <AlertCircle size={48} color="var(--status-lost)" style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Item Not Found</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>This item may have been claimed or removed.</p>
          <Link to="/search" style={{ color: 'var(--accent-gold)' }}>Browse Items</Link>
        </div>
      </div>
    )
  }

  if (success) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '3rem' }}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}
            style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(245, 166, 35, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
            <CheckCircle size={40} color="var(--accent-gold)" />
          </motion.div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>Claim Submitted!</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem' }}>Your claim has been submitted for review.</p>
          <Link to="/" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 1.5rem', background: 'var(--accent-gold)', color: 'var(--bg-void)', borderRadius: 'var(--radius-md)', fontWeight: 600, textDecoration: 'none' }}>Return Home</Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '4rem' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ maxWidth: '800px', margin: '0 auto' }}>
          <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', cursor: 'pointer', marginBottom: '2rem', padding: 0 }}>
            <ArrowLeft size={18} /> Go Back
          </button>
          <div style={{ display: 'grid', gap: '2rem' }}>
            {/* Item Card */}
            <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div style={{ height: '250px', background: item.imageURL ? `url(${item.imageURL}) center/cover` : 'linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-elevated) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                {!item.imageURL && <Image size={64} color="var(--text-muted)" opacity={0.3} />}
                <span className={`badge badge-${item.status}`} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>{item.status}</span>
              </div>
              <div style={{ padding: '2rem' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{item.category}</p>
                <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>{item.title}</h1>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{item.description}</p>
                <div style={{ display: 'flex', gap: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}><MapPin size={16} /><span style={{ fontSize: '0.9rem' }}>{item.location}</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}><Calendar size={16} /><span style={{ fontSize: '0.9rem' }}>{formatDate(item.dateReported)}</span></div>
                </div>
              </div>
            </div>
            {/* Claim Form */}
            <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '2rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Claim This Item</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>Provide proof of ownership to help us verify your claim.</p>
              
              {/* User Claim Status */}
              {userClaimForItem && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '1.5rem', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    {userClaimForItem.status === 'pending' && <Clock size={20} color="var(--accent-teal)" />}
                    {userClaimForItem.status === 'approved' && <CheckCircle size={20} color="var(--status-found)" />}
                    {userClaimForItem.status === 'rejected' && <XCircle size={20} color="var(--status-lost)" />}
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      Your Claim: {userClaimForItem.status === 'pending' ? 'Under Review' : userClaimForItem.status === 'approved' ? 'Approved' : 'Rejected'}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                    Submitted on {formatDate(userClaimForItem.dateSubmitted)}
                  </p>
                  
                  {userClaimForItem.status === 'approved' && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ background: 'rgba(46, 213, 115, 0.1)', border: '1px solid rgba(46, 213, 115, 0.3)', borderRadius: 'var(--radius-sm)', padding: '0.75rem' }}>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                        <strong>Ready for Collection!</strong> Your claim has been approved.
                      </p>
                      {userClaimForItem.collectionInstructions && (
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: 'rgba(245, 166, 35, 0.1)', border: '1px solid rgba(245, 166, 35, 0.2)', borderRadius: 'var(--radius-sm)', padding: '0.5rem' }}>
                          <strong>Collection Instructions:</strong> {userClaimForItem.collectionInstructions}
                        </div>
                      )}
                    </motion.div>
                  )}
                  
                  {userClaimForItem.status === 'rejected' && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ background: 'rgba(255, 71, 87, 0.1)', border: '1px solid rgba(255, 71, 87, 0.3)', borderRadius: 'var(--radius-sm)', padding: '0.75rem' }}>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        Unfortunately, your claim was not approved. If you believe this is an error, please contact the admin office for clarification.
                      </p>
                    </motion.div>
                  )}
                  
                  {userClaimForItem.status === 'pending' && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ background: 'rgba(0, 212, 170, 0.1)', border: '1px solid rgba(0, 212, 170, 0.3)', borderRadius: 'var(--radius-sm)', padding: '0.75rem' }}>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        Your claim is currently being reviewed by our admin team. You will be notified once a decision has been made.
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              )}
              
              {error && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: 'rgba(255, 71, 87, 0.1)', border: '1px solid rgba(255, 71, 87, 0.2)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', color: 'var(--status-lost)', fontSize: '0.9rem' }}><AlertCircle size={18} />{error}</motion.div>}
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Proof of Ownership *</label>
                  <textarea value={proof} onChange={(e) => setProof(e.target.value)} placeholder="Provide details only you would know..." required rows={5} style={{ width: '100%', padding: '0.875rem 1rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', fontSize: '0.95rem', color: 'var(--text-primary)', resize: 'vertical', minHeight: '150px' }} />
                </div>
                <motion.button type="submit" disabled={submitting} whileHover={{ scale: submitting ? 1 : 1.02 }} whileTap={{ scale: submitting ? 1 : 0.98 }}
                  style={{ width: '100%', padding: '1rem', background: submitting ? 'var(--bg-surface)' : 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dim) 100%)', border: 'none', borderRadius: 'var(--radius-md)', fontSize: '1rem', fontWeight: 600, color: 'var(--bg-void)', cursor: submitting ? 'not-allowed' : 'pointer', boxShadow: submitting ? 'none' : '0 0 25px var(--accent-gold-glow)' }}>
                  {submitting ? 'Submitting Claim...' : 'Submit Claim'}
                </motion.button>
                {!isAuthenticated && <p style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Need to sign in? <Link to="/login" style={{ color: 'var(--accent-gold)' }}>Sign in</Link></p>}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ClaimItem
