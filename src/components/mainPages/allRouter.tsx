import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from 'pages/Home/Home'
import About from 'pages/About/About'
import Service from 'pages/Service/Service'
import Gallery from 'pages/Gallery/Gallery'
import Blog from 'pages/Blog/Blog'
import Contact from 'pages/Contact/Contact'
import Team from 'pages/Team/Team'

const AllRoutes: React.FC = () => (
  <BrowserRouter>
    {/* <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/team" element={<Team />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes> */}
    <Routes>
      <Route index element={<Home />} />
      <Link to="/" />
      <Link to="/home"  />
      <Link to="/about"  />
      <Link to="/service"  />
      <Link to="/gallery"  />
      <Link to="/team"  />
      <Link to="/blog"  />
      <Link to="/contact" />
    </Routes>
    <SpeedInsights />
    <Analytics />
  </BrowserRouter>
)

export default AllRoutes
