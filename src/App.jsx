import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateBlog from "./CreateBlog";
import Registration from "./Registration";
import Login from "./Login";
import BlogPage from "./BlogPage";
import BlogList from "./BlogList";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<BlogList />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/bloglist" element={<BlogList />} />

            <Route path="/createBlog" element={<CreateBlog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
