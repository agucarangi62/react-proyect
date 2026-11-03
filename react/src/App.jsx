import {useState} from "react";

import ServiceCard from "./components/ServiceCard.jsx";
import Header from "./components/Header.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Pagination from "./components/Pagination.jsx";
import Footer from "./components/Footer.jsx";
import SearchFormSection from "./components/SearchFormSection.jsx";

import getServices from "./services/serviceService.js";

function App() {
  const services = getServices();

  const RESULT_PER_PAGE = 8;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(services.length / RESULT_PER_PAGE);

  const pagedResult = services.slice(
    (currentPage - 1) * RESULT_PER_PAGE,
    currentPage * RESULT_PER_PAGE
  );


  const handlePageChange = (page) => {
    // Lógica para cambiar de página
    setCurrentPage(page);
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
              {pagedResult.map((service) => (
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
