
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Programs from './pages/Programs';
import Partners from './pages/Partners';
import IncubationHub from './pages/IncubationHub';
import ServiceDetail from './pages/ServiceDetail';
import AdminLogin from './pages/AdminLogin';
import AdminLayout from './admin/AdminLayout';
import ServicesAdmin from './admin/ServicesAdmin';
import ProgramsAdmin from './admin/ProgramsAdmin';
import BlogAdmin from './admin/BlogAdmin';
import TeamAdmin from './admin/TeamAdmin';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="programs" element={<Programs />} />
        <Route path="partners" element={<Partners />} />
        <Route path="incubation" element={<IncubationHub />} />
        <Route path="services/:id" element={<ServiceDetail />} />
        <Route path="services" element={<Home />} />
        {/* Redirect old board page to the merged team page */}
        <Route path="board" element={<Navigate to="/team#board" replace />} />
      </Route>
      
      {/* Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route 
        path="/admin/dashboard" 
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        } 
      >
        <Route index element={<Navigate to="services" replace />} />
        <Route path="services" element={<ServicesAdmin />} />
        <Route path="programs" element={<ProgramsAdmin />} />
        <Route path="blog" element={<BlogAdmin />} />
        <Route path="team" element={<TeamAdmin />} />
        <Route path="board" element={<Navigate to="../team" replace />} />
      </Route>
    </Routes>
  );
};

export default App;