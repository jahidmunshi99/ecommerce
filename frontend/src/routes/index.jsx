import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from '../Layout';
import Home from '../components/pages/Home';
import ProductListing from '../components/pages/ProductListing';
import ProductPage from '../components/pages/ProductPage';
import UserDashboard from '../components/pages/UserDashboard';


const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/productlisting" element={<ProductListing/>} />
                <Route path="/product" element={<ProductPage/>} />
                <Route path="/myaccount" element={<UserDashboard/>} />
                <Route path="/product/:id" element={<ProductPage/>} />
            </Route>
        </Routes>
  </BrowserRouter>
  )
}

export default AllRoutes
