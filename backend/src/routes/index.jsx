import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from '../layout/MainLayout';
import Overview from '../components/Dashboard/Overview';
import Customers from '../components/Dashboard/Customers';


const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<Overview/>}></Route>
                <Route path='/customers' element={<Customers/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
