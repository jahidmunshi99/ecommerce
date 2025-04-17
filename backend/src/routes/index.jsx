import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from '../layout/MainLayout';
import Overview from '../components/Dashboard/Overview';
import UsersTable from '../components/Dashboard/Users';


const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<Overview/>}></Route>
                <Route path='/user' element={<UsersTable/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
