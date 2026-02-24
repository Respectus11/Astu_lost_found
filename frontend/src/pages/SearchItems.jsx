import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import ItemCard from '../components/ItemCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { useItems } from '../context/ItemContext.jsx'

const SearchItems = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { items, fetchItems, loading } = useItems()
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || '',
    status: searchParams.get('status') || '',
  })

  useEffect(() => {
    fetchItems(filters)
  }, [])

  const handleSearch = (newFilters) => {
    setFilters(newFilters)
    const params = new URLSearchParams()
    if (newFilters.search) params.set('search', newFilters.search)
    if (newFilters.category) params.set('category', newFilters.category)
    if (newFilters.status) params.set('status', newFilters.status)
    setSearchParams(params)
    fetchItems(newFilters)
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
            Browse Items
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Search through the archive of lost and found items
          </p>
        </motion.div>

        {/* Search Bar */}
        <div style={{ marginBottom: '2.5rem' }}>
          <SearchBar 
            onSearch={handleSearch}
            initialSearch={filters.search}
            initialCategory={filters.category}
            initialStatus={filters.status}
          />
        </div>

        {/* Results */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
            }}>
              {loading ? 'Searching...' : `${items.length} items found`}
            </span>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} style={{
                height: '380px',
                background: 'var(--bg-elevated)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
                animation: 'pulse 1.5s infinite',
              }} />
            ))}
          </div>
        ) : items.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            {items.map((item, index) => (
              <ItemCard key={item._id} item={item} index={index} />
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
            <Search size={64} color="var(--text-muted)" style={{ margin: '0 auto 1.5rem', opacity: 0.3 }} />
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              color: 'var(--text-primary)',
              marginBottom: '0.75rem',
            }}>
              No Items Found
            </h3>
            <p style={{ 
              color: 'var(--text-muted)', 
              maxWidth: '400px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              We couldn't find any items matching your search. Try adjusting your filters or check back later.
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

export default SearchItems
