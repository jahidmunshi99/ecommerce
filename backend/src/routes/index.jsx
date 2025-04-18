import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from '../layout/MainLayout';
import Overview from '../components/Dashboard/Overview';
import Customers from '../components/Dashboard/Customers';
import AllUsers from '../components/Dashboard/Users';



const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<Overview/>}></Route>
                <Route path='/customers' element={<Customers/>}></Route>
                <Route path='/users' element={<AllUsers/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
