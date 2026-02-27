import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext.jsx'
import { useItems } from '../context/ItemContext.jsx'

const MyClaims = () => {
  const { user } = useAuth()
  const { getUserClaims, getItemById } = useItems()
  const [claims, setClaims] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserClaims = async () => {
      setLoading(true)
      try {
        const userClaims = await getUserClaims()
        setClaims(userClaims)
      } catch (error) {
      } finally {
        setLoading(false)
      }
    }

    if (user) {
      fetchUserClaims()
    }
  }, [user, getUserClaims])

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'var(--text-muted)'
      case 'approved': return 'var(--accent-gold)'
      case 'rejected': return '#ef4444'
      default: return 'var(--text-muted)'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return '⏳'
      case 'approved': return '✅'
      case 'rejected': return '❌'
      default: return '⏳'
    }
  }

  if (!user) {
    return (
      <div style={{ minHeight: '100vh', paddingTop: '100px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              textAlign: 'center',
              padding: '5rem 2rem',
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-lg)',
              border: '1px dashed var(--border-medium)',
            }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              color: 'var(--text-primary)',
              marginBottom: '0.75rem',
            }}>
              Please Login to View Your Claims
            </h3>
            <p style={{ 
              color: 'var(--text-muted)', 
              maxWidth: '400px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              You need to be logged in to view your claim history. Please log in or register to access this feature.
            </p>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
          }}>
            My Claims
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Track the status of your item claims
          </p>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1rem',
          }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{
                height: '120px',
                background: 'var(--bg-elevated)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
                animation: 'pulse 1.5s infinite',
              }} />
            ))}
          </div>
        ) : claims.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5rem',
          }}>
            {claims.map((claim) => (
              <motion.div
                key={claim._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ 
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem',
                }}>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem',
                    }}>
                      {claim.item.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      Category: {claim.item.category} • Location: {claim.item.location}
                    </p>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    background: 'rgba(255, 215, 0, 0.1)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 215, 0, 0.2)',
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>{getStatusIcon(claim.status)}</span>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: getStatusColor(claim.status),
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      {claim.status}
                    </span>
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <strong>Claim Date:</strong> {new Date(claim.createdAt).toLocaleDateString()}
                  </p>
                  {claim.collectionInstructions && claim.status === 'approved' && (
                    <div style={{
                      marginTop: '1rem',
                      padding: '1rem',
                      background: 'rgba(255, 215, 0, 0.1)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      borderRadius: 'var(--radius-md)',
                    }}>
                      <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
                        📍 Collection Instructions
                      </h4>
                      <p style={{ color: 'var(--text-primary)', lineHeight: 1.5 }}>
                        {claim.collectionInstructions}
                      </p>
                    </div>
                  )}
                </div>

                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1rem',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                  }}>
                    Claim ID: {claim._id.substring(0, 8)}...
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: 'center',
              padding: '5rem 2rem',
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-lg)',
              border: '1px dashed var(--border-medium)',
            }}
          >
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              color: 'var(--text-primary)',
              marginBottom: '0.75rem',
            }}>
              No Claims Found
            </h3>
            <p style={{ 
              color: 'var(--text-muted)', 
              maxWidth: '400px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              You haven't submitted any claims yet. Visit the search page to find items and submit a claim if you find something that belongs to you.
            </p>
          </motion.div>
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}

export default MyClaims