import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

// Cargando las paginas de forma lazy para optimizar la carga de la pagina
const HomePage = lazy(() => import("./pages/Home.jsx"));
const SearchPage = lazy(() => import("./pages/Search.jsx"));
const NotFoundPage = lazy(() => import("./pages/404.jsx"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail.jsx"));
const ProfilePage = lazy(() => import("./pages/ProfilePage.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const FreelancerProfilePage = lazy(
  () => import("./pages/FreelancerProfile.jsx"),
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute redirectTo="/login">
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/freelancer/:freelancerId"
            element={<FreelancerProfilePage />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
