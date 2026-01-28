import { useUniforms } from '../context/UniformContext'

/**
 * Search bar component for filtering items by name or size
 * Mobile-responsive search input with clear button
 * Updates search query in real-time
 */
function SearchBar() {
  const { searchQuery, setSearchQuery } = useUniforms()

  /**
   * Handle search input change
   * @param {Event} e - Input change event
   */
  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  /**
   * Clear search query
   */
  const handleClear = () => {
    setSearchQuery('')
  }

  return (
    <div className="mb-6">
      <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2 sm:text-base">
        Search Items
      </label>
      <div className="relative">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Search Input */}
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search by name or size..."
          className="block w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base bg-white shadow-sm transition-shadow hover:shadow-md"
        />

        {/* Clear Button */}
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Search Hint */}
      {searchQuery && (
        <p className="mt-2 text-xs sm:text-sm text-gray-500">
          Searching for: <span className="font-medium text-gray-700">"{searchQuery}"</span>
        </p>
      )}
    </div>
  )
}

export default SearchBar
