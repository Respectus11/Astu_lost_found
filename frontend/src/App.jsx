import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import SearchItems from './pages/SearchItems'
import ReportLost from './pages/ReportLost'
import ReportFound from './pages/ReportFound'
import ClaimItem from './pages/ClaimItem'
import AdminDashboard from './pages/AdminDashboard'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3
    }
  }
}

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes>
          <Route 
            path="/" 
            element={
              <motion.div
                key="home"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Home />
              </motion.div>
            } 
          />
          <Route 
            path="/login" 
            element={
              <motion.div
                key="login"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Login />
              </motion.div>
            } 
          />
          <Route 
            path="/register" 
            element={
              <motion.div
                key="register"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Register />
              </motion.div>
            } 
          />
          <Route 
            path="/search" 
            element={
              <motion.div
                key="search"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <SearchItems />
              </motion.div>
            } 
          />
          <Route 
            path="/report-lost" 
            element={
              <motion.div
                key="report-lost"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ReportLost />
              </motion.div>
            } 
          />
          <Route 
            path="/report-found" 
            element={
              <motion.div
                key="report-found"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ReportFound />
              </motion.div>
            } 
          />
          <Route 
            path="/claim/:id" 
            element={
              <motion.div
                key="claim"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ClaimItem />
              </motion.div>
            } 
          />
          <Route 
            path="/admin" 
            element={
              <motion.div
                key="admin"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <AdminDashboard />
              </motion.div>
            } 
          />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
