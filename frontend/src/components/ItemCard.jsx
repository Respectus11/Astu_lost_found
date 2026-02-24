import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Image, ArrowRight } from 'lucide-react'

const ItemCard = ({ item, index = 0 }) => {
  const cardRef = useRef(null)

  const getStatusBadge = (status) => {
    const statusConfig = {
      lost: { label: 'Lost', class: 'badge-lost' },
      found: { label: 'Found', class: 'badge-found' },
      claimed: { label: 'Claimed', class: 'badge-claimed' }
    }
    return statusConfig[status] || statusConfig.lost
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const status = getStatusBadge(item.status)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      style={{
        background: 'var(--bg-elevated)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
      }}
      className="item-card"
    >
      {/* Glow Effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: `linear-gradient(90deg, transparent, var(--accent-gold), transparent)`,
        opacity: 0,
        transition: 'opacity 0.3s ease',
      }} className="card-glow" />

      {/* Image Section */}
      <div style={{
        height: '180px',
        background: item.imageURL 
          ? `url(${item.imageURL}) center/cover`
          : 'linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-elevated) 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {!item.imageURL && (
          <Image size={48} color="var(--text-muted)" opacity={0.3} />
        )}
        
        {/* Status Badge */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
        }}>
          <span className={`badge ${status.class}`}>
            {status.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem' }}>
        {/* Category */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--accent-gold)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '0.5rem',
        }}>
          {item.category}
        </p>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '0.75rem',
          lineHeight: 1.3,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {item.title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          marginBottom: '1rem',
          lineHeight: 1.5,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {item.description}
        </p>

        {/* Meta Info */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border-subtle)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--text-muted)',
            fontSize: '0.8rem',
          }}>
            <MapPin size={14} />
            <span>{item.location}</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--text-muted)',
            fontSize: '0.8rem',
          }}>
            <Calendar size={14} />
            <span>{formatDate(item.dateReported)}</span>
          </div>
        </div>

        {/* Action */}
        <Link to={`/claim/${item._id}`} style={{ textDecoration: 'none' }}>
          <motion.div
            whileHover={{ x: 4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '1rem',
              padding: '0.75rem 1rem',
              background: item.status === 'lost' 
                ? 'rgba(255, 71, 87, 0.1)' 
                : 'rgba(0, 212, 170, 0.1)',
              borderRadius: 'var(--radius-md)',
              color: item.status === 'lost' 
                ? 'var(--status-lost)' 
                : 'var(--accent-teal)',
              fontSize: '0.875rem',
              fontWeight: 500,
              transition: 'all 0.2s ease',
            }}
          >
            {item.status === 'lost' ? 'This is mine' : 'Claim Item'}
            <ArrowRight size={16} />
          </motion.div>
        </Link>
      </div>

      {/* Hover Styles */}
      <style>{`
        .item-card:hover .card-glow {
          opacity: 1;
        }
      `}</style>
    </motion.div>
  )
}

export default ItemCard
