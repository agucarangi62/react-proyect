import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

// Cargando las paginas de forma lazy para optimizar la carga de la pagina
const HomePage = lazy(() => import("./pages/Home.jsx"));
const SearchPage = lazy(() => import("./pages/Search.jsx"));
const NotFoundPage = lazy(() => import("./pages/404.jsx"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail.jsx"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Cargando...</div>}></Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
