import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from '../layout/MainLayout';
import Overview from '../components/Menus/Dashboard/Overview';
import Customers from '../components/Menus/Ecommerce/Customers'
import AllUsers from '../components/Menus/Users'
import AllOrders from '../components/Menus/Ecommerce/Orders';
import Authentication from '../components/Menus/Authentication';
import Products from '../components/Menus/Ecommerce/Products';
import Campains from '../components/Menus/Campains';
import AllCategories from '../components/Menus/Ecommerce/Categories';




const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<Overview/>}></Route>
                <Route path='/admin/dashboard/' element={<Overview/>}></Route>
                <Route path='/admin/ecommerce/customers' element={<Customers/>}></Route>
                <Route path='/admin/ecommerce/orders' element={<AllOrders/>}></Route>
                <Route path='/admin/ecommerce/products' element={<Products/>}></Route>
                <Route path='/admin/ecommerce/category' element={<AllCategories/>}></Route>
                <Route path='/admin/users' element={<AllUsers/>}></Route>
                <Route path='/admin/authentication' element={<Authentication/>}></Route>
                <Route path='/admin/campains' element={<Campains/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
