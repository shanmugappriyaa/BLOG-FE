import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateBlog from "./CreateBlog";
import Registration from "./Registration";
import Login from "./Login";
import BlogPage from "./BlogPage";
import BlogList from "./BlogList";
import Layout from "./components/Layout";
import Dashboard from "./Dashboard";
import EditBlog from './EditBlog'
import axios from "axios";
import UserBlog from "./UserBlog";
import { base_url } from "./utils/ApiService";
function App() {
  axios.defaults.baseURL = base_url;
  axios.defaults.withCredentials = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Dashboard />} /> */}
             <Route index element={<BlogList />} /> 
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/bloglist" element={<BlogList />} />
<Route path='/dashboard' element={<Dashboard />}/>
            <Route path="/createBlog" element={<CreateBlog />} />
            <Route path="/userBlog" element={<UserBlog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/editblog/:id" element={<EditBlog />} />
            <Route path="/registration" element={<Registration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
