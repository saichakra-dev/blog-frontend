import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Edit from "./pages/edit/Edit";
import axios from "axios";

function App() {
  const [blogsData, setBlogsData] = useState([]);

  const api = import.meta.env.VITE_API_URL;
  useEffect(() => {
    axios
      .get(api)
      .then((res) => setBlogsData(res.data))
      .catch((error) => console.log(error));
  }, [blogsData]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home blogsData={blogsData} />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit blogsData={blogsData} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
