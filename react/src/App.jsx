import {useState} from "react";

import ServiceCard from "./components/ServiceCard.jsx";
import Header from "./components/Header.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Pagination from "./components/Pagination.jsx";
import Footer from "./components/Footer.jsx";
import SearchFormSection from "./components/SearchFormSection.jsx";

import getServices from "./services/serviceService.js";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const services = getServices();

  const handlePageChange = (page) => {
    // Lógica para cambiar de página
    setCurrentPage(page);
    console.log(`Cambiando a la página ${page}`);
  };

  return (
    <>
      <Header />

      <MobileMenu />

      <main className="container">
        <SearchFormSection />
        {/* Popular Services */}
        <section>
          <div className="popular-services">
            <h2>Servicios Populares</h2>
            {/* Grid Servicios */}
            <div className="services">
              {/* Services */}
              {services.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </section>
        {/* Paginacion */}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
      </main>

      <Footer />
    </>
  );
}

export default App;
