import {  Route, Routes } from 'react-router-dom';

import React from 'react'
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Profiles from '../components/Profiles/Profiles';
import AddProfile from '../components/AddProfile/AddProfile';
import Edit from '../components/Edit/Edit';

export default function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profiles" element={<Profiles />} />
                <Route path='/addprofile' element={<AddProfile/>}/>
                <Route path='/edit/:id' element={<Edit/>}/>
            </Routes>
        </div>
    )
}
