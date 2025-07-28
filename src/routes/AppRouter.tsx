import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '@/pages/HomePage'
import SchedulerComponent from '@/components/Scheduler'
import NotFoundPage from '@/pages/NotFoundPage'
import Login from '@/pages/auth/Login'

const AppRouter: React.FC = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scheduler" element={<SchedulerComponent />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default AppRouter