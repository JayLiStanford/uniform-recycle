import { useState } from 'react'
import { useUniforms } from '../context/UniformContext'

/**
 * Category filter component for filtering uniform items by category
 * Dynamically generates categories from available items
 * Displays category buttons on desktop and dropdown on mobile
 * Mobile-responsive with both button and dropdown options
 */
function CategoryFilter() {
  const { selectedCategory, setSelectedCategory, getCategories, items } = useUniforms()
  const categories = getCategories()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  /**
   * Handle category selection from dropdown or buttons
   * @param {string} category - The selected category name
   */
  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    setIsDropdownOpen(false)
  }

  /**
   * Get count of items in a specific category
   * @param {string} category - The category name
   * @returns {number} Count of available items in the category
   */
  const getCategoryCount = (category) => {
    if (category === 'All') {
      return items.filter(item => item.available).length
    }
    return items.filter(item => item.category === category && item.available).length
  }

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Filter by Category</h2>
        {/* Mobile Dropdown Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
          >
            <span>{selectedCategory}</span>
            <svg
              className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isDropdownOpen && (
        <div className="md:hidden mb-4 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <div className="py-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center justify-between ${
                  selectedCategory === category
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>
                  {category}
                  {selectedCategory === category && (
                    <span className="ml-2 text-blue-600">✓</span>
                  )}
                </span>
                <span className="text-xs text-gray-500">({getCategoryCount(category)})</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Category Buttons */}
      <div className="hidden md:flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            <span>{category}</span>
            <span className={`text-xs ${
              selectedCategory === category ? 'text-blue-100' : 'text-gray-500'
            }`}>
              ({getCategoryCount(category)})
            </span>
          </button>
        ))}
      </div>

      {/* Show active filter on mobile when dropdown is closed */}
      {!isDropdownOpen && (
        <div className="md:hidden">
          <div className="text-sm text-gray-600">
            Showing: <span className="font-medium text-gray-900">{selectedCategory}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default CategoryFilter
