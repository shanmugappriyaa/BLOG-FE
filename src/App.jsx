import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import CreateBlog from "./CreateBlog";
import Registration from "./Registration";
import Login from "./Login";
import BlogPage from "./BlogPage";
import BlogList from "./BlogList";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogPage />} />
          <Route path="/sampleBlog" element={<BlogList />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
