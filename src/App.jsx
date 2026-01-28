import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AdminPage from './pages/AdminPage'
import { UniformProvider } from './context/UniformContext'

/**
 * Main App component that sets up routing and provides uniform context
 * to all child components
 */
function App() {
  return (
    <UniformProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
      </Router>
    </UniformProvider>
  )
}

export default App
