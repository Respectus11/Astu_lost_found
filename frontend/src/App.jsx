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
import MyClaims from './pages/MyClaims'

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
      
      <Routes>
        <Route 
          path="/" 
          element={
            <AnimatePresence mode="wait">
              <motion.div
                key="home"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Home />
              </motion.div>
            </AnimatePresence>
          } 
        />
        <Route 
          path="/login" 
          element={
            <AnimatePresence mode="wait">
              <motion.div
                key="login"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Login />
              </motion.div>
            </AnimatePresence>
          } 
        />
        <Route 
          path="/register" 
          element={
            <AnimatePresence mode="wait">
              <motion.div
                key="register"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Register />
              </motion.div>
            </AnimatePresence>
          } 
        />
        <Route 
          path="/search" 
          element={
            <AnimatePresence mode="wait">
              <motion.div
                key="search"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <SearchItems />
              </motion.div>
            </AnimatePresence>
          } 
        />
        <Route 
          path="/report-lost" 
          element={
            <AnimatePresence mode="wait">
              <motion.div
                key="report-lost"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ReportLost />
              </motion.div>
            </AnimatePresence>
          } 
        />
        <Route 
          path="/report-found" 
          element={
            <AnimatePresence mode="wait">
              <motion.div
                key="report-found"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ReportFound />
              </motion.div>
            </AnimatePresence>
          } 
        />
        <Route 
          path="/claim/:id" 
          element={
            <AnimatePresence mode="wait">
              <motion.div
                key="claim"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ClaimItem />
              </motion.div>
            </AnimatePresence>
          } 
        />
        <Route 
          path="/my-claims" 
          element={
            <AnimatePresence mode="wait">
              <motion.div
                key="my-claims"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <MyClaims />
              </motion.div>
            </AnimatePresence>
          } 
        />
        <Route 
          path="/admin" 
          element={
            <AnimatePresence mode="wait">
              <motion.div
                key="admin"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <AdminDashboard />
              </motion.div>
            </AnimatePresence>
          } 
        />
      </Routes>
    </div>
  )
}

export default App
