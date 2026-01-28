import { createContext, useContext, useState, useEffect } from 'react'

/**
 * Context for managing uniform items state across the application
 * Provides CRUD operations for uniform items and categories
 */
const UniformContext = createContext()

/**
 * Provider component that wraps the app and manages uniform items state
 * Uses React state to manage items and categories in memory
 * Data persists to localStorage for convenience but state is the source of truth
 */
export function UniformProvider({ children }) {
  // Load initial data from localStorage or use default sample data
  // State is managed entirely in React memory - localStorage is just for persistence
  const loadInitialItems = () => {
    const saved = localStorage.getItem('uniformItems')
    if (saved) {
      try {
        const items = JSON.parse(saved)
        // Ensure existing items don't have isNew flag (they're not newly added)
        return items.map(item => ({
          ...item,
          isNew: false,
          createdAt: item.createdAt || Date.now() - 86400000 // Set old timestamp if missing
        }))
      } catch (error) {
        console.error('Error loading items from localStorage:', error)
        return getDefaultItems()
      }
    }
    return getDefaultItems()
  }

  /**
   * Get default sample items for demonstration
   * Includes placeholder images using placeholder.com service
   * @returns {Array} Array of default uniform items
   */
  const getDefaultItems = () => {
    return [
      {
        id: 1,
        name: 'School Blazer - Size 12',
        category: 'Blazers',
        size: '12',
        condition: 'Excellent',
        description: 'Navy blue school blazer in excellent condition, perfect for formal occasions',
        image: 'https://placehold.co/400x500/1e3a8a/ffffff?text=Blazer+Size+12',
        available: true
      },
      {
        id: 2,
        name: 'School Shirt - Size 10',
        category: 'Shirts',
        size: '10',
        condition: 'Excellent',
        description: 'White school shirt, barely worn, crisp and clean',
        image: 'https://placehold.co/400x500/f3f4f6/1f2937?text=Shirt+Size+10',
        available: true
      },
      {
        id: 3,
        name: 'School Trousers - Size 14',
        category: 'Trousers',
        size: '14',
        condition: 'Good',
        description: 'Grey school trousers, good condition with minimal wear',
        image: 'https://placehold.co/400x500/6b7280/ffffff?text=Trousers+Size+14',
        available: true
      },
      {
        id: 4,
        name: 'School Skirt - Size 12',
        category: 'Skirts',
        size: '12',
        condition: 'Excellent',
        description: 'Pleated school skirt in perfect condition, like new',
        image: 'https://placehold.co/400x500/7c3aed/ffffff?text=Skirt+Size+12',
        available: true
      },
      {
        id: 5,
        name: 'School Tie',
        category: 'Accessories',
        size: 'Standard',
        condition: 'Excellent',
        description: 'School tie in perfect condition, like new',
        image: 'https://placehold.co/400x500/dc2626/ffffff?text=School+Tie',
        available: true
      },
      {
        id: 6,
        name: 'School Shirt - Size 14',
        category: 'Shirts',
        size: '14',
        condition: 'Good',
        description: 'White school shirt, well-maintained and ready to wear',
        image: 'https://placehold.co/400x500/f3f4f6/1f2937?text=Shirt+Size+14',
        available: true
      },
      {
        id: 7,
        name: 'School Belt',
        category: 'Accessories',
        size: 'Medium',
        condition: 'Excellent',
        description: 'Leather school belt, adjustable and in great condition',
        image: 'https://placehold.co/400x500/92400e/ffffff?text=School+Belt',
        available: true
      },
      {
        id: 8,
        name: 'School Blazer - Size 14',
        category: 'Blazers',
        size: '14',
        condition: 'Good',
        description: 'Navy blue blazer, well-maintained with minor wear',
        image: 'https://placehold.co/400x500/1e3a8a/ffffff?text=Blazer+Size+14',
        available: true
      }
    ]
  }

  // React state manages all items in memory
  // This is the single source of truth for all uniform items
  const [items, setItems] = useState(loadInitialItems)
  
  // React state for selected category filter
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  // React state for search query
  const [searchQuery, setSearchQuery] = useState('')

  // Persist to localStorage whenever items change (optional - for convenience)
  // The actual state lives in React memory and updates trigger re-renders
  useEffect(() => {
    try {
      localStorage.setItem('uniformItems', JSON.stringify(items))
    } catch (error) {
      console.error('Error saving items to localStorage:', error)
    }
  }, [items])

  /**
   * Add a new uniform item to state
   * Updates React state, which triggers re-render of all consuming components
   * @param {Object} item - The uniform item to add
   */
  const addItem = (item) => {
    const newItem = {
      ...item,
      id: Date.now(), // Simple ID generation
      available: true,
      createdAt: Date.now(), // Track when item was created for "New" badge
      isNew: true // Flag to highlight newly added items
    }
    // Update state - this triggers React re-render and updates homepage in real-time
    setItems(prevItems => [...prevItems, newItem])
    
    // Remove "isNew" flag after 24 hours (86400000 ms)
    setTimeout(() => {
      setItems(prevItems => 
        prevItems.map(i => i.id === newItem.id ? { ...i, isNew: false } : i)
      )
    }, 86400000)
  }

  /**
   * Update an existing uniform item in state
   * Updates React state, which triggers re-render of all consuming components
   * Preserves createdAt and isNew flags when updating
   * @param {number} id - The ID of the item to update
   * @param {Object} updatedItem - The updated item data
   */
  const updateItem = (id, updatedItem) => {
    // Update state - this triggers React re-render and updates homepage in real-time
    // Preserve createdAt and isNew flags from original item
    setItems(prevItems => 
      prevItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            ...updatedItem,
            createdAt: item.createdAt, // Preserve creation timestamp
            isNew: item.isNew // Preserve new flag
          }
        }
        return item
      })
    )
  }

  /**
   * Delete a uniform item from state
   * Updates React state, which triggers re-render of all consuming components
   * @param {number} id - The ID of the item to delete
   */
  const deleteItem = (id) => {
    // Update state - this triggers React re-render and updates homepage in real-time
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  /**
   * Get all available categories dynamically from current items state
   * Categories are generated in real-time from items in memory
   * @returns {Array} Array of unique category names including 'All'
   */
  const getCategories = () => {
    // Dynamically extract unique categories from current items state
    const uniqueCategories = [...new Set(items.map(item => item.category))]
    return ['All', ...uniqueCategories]
  }

  /**
   * Filter items by selected category and search query
   * Returns filtered items based on current state
   * Updates automatically when items, selectedCategory, or searchQuery changes
   * Searches by name or size (case-insensitive)
   * @returns {Array} Filtered array of items
   */
  const getFilteredItems = () => {
    let filtered = items.filter(item => item.available)
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory)
    }
    
    // Filter by search query (name or size)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.size.toLowerCase().includes(query)
      )
    }
    
    return filtered
  }

  const value = {
    items,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    addItem,
    updateItem,
    deleteItem,
    getCategories,
    getFilteredItems
  }

  return (
    <UniformContext.Provider value={value}>
      {children}
    </UniformContext.Provider>
  )
}

/**
 * Custom hook to access uniform context
 * @returns {Object} Uniform context value
 */
export function useUniforms() {
  const context = useContext(UniformContext)
  if (!context) {
    throw new Error('useUniforms must be used within UniformProvider')
  }
  return context
}
