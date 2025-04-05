import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from '../Layout';
import Home from '../components/pages/Home';


const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>} />
            </Route>
        </Routes>
  </BrowserRouter>
  )
}

export default AllRoutes
