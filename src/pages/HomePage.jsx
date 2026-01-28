import { useUniforms } from '../context/UniformContext'
import UniformCard from '../components/UniformCard'
import CategoryFilter from '../components/CategoryFilter'
import SearchBar from '../components/SearchBar'

/**
 * Homepage component displaying available uniform items
 * Includes search, category filtering, and responsive grid layout
 * Automatically updates in real-time when items are added, edited, or deleted
 * React state changes trigger automatic re-renders
 * Mobile-friendly with enhanced card styling
 */
function HomePage() {
  // Get filtered items from context - updates automatically when state changes
  const { getFilteredItems, searchQuery } = useUniforms()
  const filteredItems = getFilteredItems()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Search Bar */}
      <SearchBar />

      {/* Category Filter */}
      <CategoryFilter />

      {/* Results Count */}
      {(searchQuery || filteredItems.length > 0) && (
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            {filteredItems.length === 0 ? (
              <span>No items found matching your search.</span>
            ) : (
              <span>
                Showing <span className="font-semibold text-gray-900">{filteredItems.length}</span> item{filteredItems.length !== 1 ? 's' : ''}
              </span>
            )}
          </p>
        </div>
      )}

      {/* Items Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <UniformCard key={item.id} item={item} />
          ))}
        </div>
      ) : !searchQuery ? (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
          <p className="text-gray-500 text-lg">No items available in this category.</p>
        </div>
      ) : null}
    </div>
  )
}

export default HomePage
