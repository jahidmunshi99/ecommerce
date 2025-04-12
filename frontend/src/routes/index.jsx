import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from '../Layout';
import Home from '../components/pages/Home';
import ProductListing from '../components/pages/ProductListing';


const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/productlisting" element={<ProductListing/>} />
            </Route>
        </Routes>
  </BrowserRouter>
  )
}

export default AllRoutes
