import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AdminPage from './pages/AdminPage'
import { UniformProvider } from './context/UniformContext'

/**
 * Main App component that sets up routing and provides uniform context
 * to all child components
 * Sets basename for GitHub Pages deployment
 */
function App() {
  // Set basename for GitHub Pages deployment
  // This ensures routes work correctly when deployed to /uniform-recycle/
  // Remove trailing slash for React Router compatibility
  const basename = (import.meta.env.BASE_URL || '/uniform-recycle/').replace(/\/$/, '')

  return (
    <UniformProvider>
      <Router basename={basename}>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admin" element={<AdminPage />} />
            {/* Redirect any unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </UniformProvider>
  )
}

export default App
