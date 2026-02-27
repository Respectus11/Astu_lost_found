import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Plus, User, LogOut, Menu, X, Shield, LayoutGrid } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const { user, isAuthenticated, logout, isAdmin } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/report-lost', label: 'Report Lost', icon: Plus },
    { path: '/report-found', label: 'Report Found', icon: Plus },
  ]

  const userNavLinks = [
    { path: '/search', label: 'Browse', icon: Search },
    { path: '/report-lost', label: 'Report Lost', icon: Plus },
    { path: '/report-found', label: 'Report Found', icon: Plus },
  ]

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsProfileOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: isScrolled 
          ? 'rgba(10, 10, 15, 0.85)' 
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled 
          ? '1px solid var(--border-subtle)' 
          : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dim) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px var(--accent-gold-glow)',
          }}>
            <Search size={22} color="#050508" strokeWidth={2.5} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}>
              ASTU
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--accent-gold)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>
              Lost & Found
            </span>
          </div>
        </motion.div>
      </Link>

      {/* Desktop Navigation */}
      <div className="nav-links" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        {isAuthenticated && isAdmin() ? (
          // Admin navigation - only show Admin Dashboard
          <Link to="/admin" style={{ textDecoration: 'none' }}>
            <motion.span
              whileHover={{ y: -2 }}
              style={{
                padding: '0.6rem 1rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: location.pathname === '/admin' ? 'var(--accent-gold)' : 'var(--accent-teal)',
                background: location.pathname === '/admin' ? 'rgba(245, 166, 35, 0.1)' : 'rgba(0, 212, 170, 0.1)',
                border: location.pathname === '/admin' ? '1px solid rgba(245, 166, 35, 0.2)' : '1px solid rgba(0, 212, 170, 0.2)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease',
              }}
            >
              <Shield size={16} />
              Admin Dashboard
            </motion.span>
          </Link>
        ) : (
          // Regular user navigation - show Report Lost and Report Found
          navLinks.map((link) => (
            <Link key={link.path} to={link.path} style={{ textDecoration: 'none' }}>
              <motion.span
                whileHover={{ y: -2 }}
                style={{
                  padding: '0.6rem 1.2rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: location.pathname === link.path 
                    ? 'var(--accent-gold)' 
                    : 'var(--text-secondary)',
                  background: location.pathname === link.path 
                    ? 'rgba(245, 166, 35, 0.1)' 
                    : 'transparent',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <link.icon size={16} />
                {link.label}
              </motion.span>
            </Link>
          ))
        )}

        {/* Auth Section */}
        {isAuthenticated ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: '1rem' }}>
            {!isAdmin() && (
              <Link to="/my-claims" style={{ textDecoration: 'none' }}>
                <motion.span
                  whileHover={{ y: -2 }}
                  style={{
                    padding: '0.6rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: location.pathname === '/my-claims' ? 'var(--accent-teal)' : 'var(--text-secondary)',
                    background: location.pathname === '/my-claims' ? 'rgba(0, 212, 170, 0.1)' : 'transparent',
                    border: location.pathname === '/my-claims' ? '1px solid rgba(0, 212, 170, 0.2)' : '1px solid transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <LayoutGrid size={16} />
                  My Claims
                </motion.span>
              </Link>
            )}

            <div style={{ position: 'relative' }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-medium)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                }}
              >
                <User size={18} />
              </motion.button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 0.75rem)',
                      right: 0,
                      width: '220px',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.75rem',
                      boxShadow: 'var(--shadow-lg)',
                    }}
                  >
                    <div style={{
                      padding: '0.75rem',
                      borderBottom: '1px solid var(--border-subtle)',
                      marginBottom: '0.5rem',
                    }}>
                      <p style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem',
                        marginBottom: '0.25rem',
                      }}>
                        {user?.name}
                      </p>
                      <p style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                      }}>
                        {user?.email}
                      </p>
                    </div>
                    <button
                      onClick={handleLogout}
                      style={{
                        width: '100%',
                        padding: '0.6rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--status-lost)',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'background 0.2s ease',
                      }}
                      onMouseEnter={(e) => e.target.style.background = 'rgba(255, 71, 87, 0.1)'}
                      onMouseLeave={(e) => e.target.style.background = 'transparent'}
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <motion.span
                whileHover={{ y: -2 }}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                }}
              >
                Sign In
              </motion.span>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <motion.span
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--bg-void)',
                  background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-dim) 100%)',
                  cursor: 'pointer',
                  boxShadow: '0 0 15px var(--accent-gold-glow)',
                }}
              >
                Get Started
              </motion.span>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          display: 'none',
          padding: '0.5rem',
          background: 'transparent',
          border: 'none',
          color: 'var(--text-primary)',
          cursor: 'pointer',
        }}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 900px) {
          .nav-links {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </motion.nav>
  )
}

export default Navbar
