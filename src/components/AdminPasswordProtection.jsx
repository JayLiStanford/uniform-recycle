import { useState } from 'react'

/**
 * Password protection component for admin page
 * Requires correct password before allowing access to admin features
 * Password is stored in localStorage for convenience (session persistence)
 * Default password: "admin123" (can be changed)
 */
function AdminPasswordProtection({ children }) {
  // Default admin password - change this to your desired password
  const DEFAULT_PASSWORD = 'admin123'
  const STORAGE_KEY = 'adminAuthenticated'
  const PASSWORD_KEY = 'adminPassword'
  
  // Check if user is already authenticated (from localStorage)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if authenticated in current session
    const authenticated = sessionStorage.getItem(STORAGE_KEY) === 'true'
    return authenticated
  })
  
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  /**
   * Get the admin password from localStorage or use default
   * @returns {string} The admin password
   */
  const getAdminPassword = () => {
    const storedPassword = localStorage.getItem(PASSWORD_KEY)
    return storedPassword || DEFAULT_PASSWORD
  }

  /**
   * Handle password submission
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate a small delay for better UX
    setTimeout(() => {
      const correctPassword = getAdminPassword()
      
      if (password === correctPassword) {
        // Set authentication in sessionStorage (clears when browser closes)
        sessionStorage.setItem(STORAGE_KEY, 'true')
        setIsAuthenticated(true)
        setPassword('')
      } else {
        setError('Incorrect password. Please try again.')
        setPassword('')
      }
      setIsLoading(false)
    }, 300)
  }

  /**
   * Handle logout
   */
  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY)
    setIsAuthenticated(false)
    setPassword('')
    setError('')
  }

  // If authenticated, show the admin content
  if (isAuthenticated) {
    return (
      <div>
        {/* Logout button */}
        <div className="mb-4 flex justify-end">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors text-sm"
          >
            Logout
          </button>
        </div>
        {children}
      </div>
    )
  }

  // Show password prompt if not authenticated
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
            <svg
              className="h-6 w-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Admin Access</h2>
          <p className="mt-2 text-sm text-gray-600">
            Please enter the password to access the admin dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError('')
              }}
              className={`w-full px-3 py-2 border ${
                error ? 'border-red-300' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter admin password"
              autoFocus
              disabled={isLoading}
            />
            {error && (
              <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading || !password.trim()}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Verifying...' : 'Access Admin'}
          </button>
        </form>

        <p className="mt-4 text-xs text-center text-gray-500">
          Default password: admin123
        </p>
      </div>
    </div>
  )
}

export default AdminPasswordProtection
