
import { Home } from "./pages/Home";
//import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Store } from "./pages/Store";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import "./index.css";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
