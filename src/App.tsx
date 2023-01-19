import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Footer from "./Layouts/Footer";
import Headers from "./Layouts/Header";
import InitialPage from "./Components/Pages/InitialPage";
import Pagina2 from "./Components/Pages/Lugar.page";
import { Publicacion } from "./Components/Pages/Publicar";
import Localizacion from "./Components/Pages/Seccions/Localization";
import Profile from "./Components/Pages/Profile";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";

// Antd
import Spin from "antd/es/spin";

// Rutas
import { Layout } from "antd";
import React from "react";
import { Container } from "@mui/material";

// Pages

const sections = [
  { title: "Destinos", url: "/Destinos" },
  { title: "Tours", url: "/Tours" },
  { title: "Al Aire Libre", url: "/airelibre" },
  { title: "Relajacion", url: "/relajacion" },
];

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Spin className="fadeIn app-loading" tip="Cargando Componentes..." />
        }
      >
        <Layout>
        
            <Headers sections={sections}></Headers>
      
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<InitialPage />} />
            <Route path="/pagina2" element={<Pagina2 />} />
            <Route path="/localizacion" element={<Localizacion />} />
            <Route path="/Destinos" element={<Publicacion />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
