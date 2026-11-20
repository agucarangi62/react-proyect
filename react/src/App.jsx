import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import { Routes, Route } from "react-router";
import { HomePage } from "./pages/Home.jsx";
import { SearchPage } from "./pages/Search.jsx";
import { NotFoundPage } from "./pages/404.jsx";
import { ServiceDetail } from "./pages/ServiceDetail.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
