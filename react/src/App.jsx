import ServiceCard from "./components/ServiceCard.jsx";
import Header from "./components/Header.jsx";
import MobileMenu from "./components/MobileMenu.jsx";
import Pagination from "./components/Pagination.jsx";
import Footer from "./components/Footer.jsx";
import SearchFormSection from "./components/SearchFormSection.jsx";

import getServices from "./services/serviceService.js";

function App() {
  const services = getServices();

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
        <Pagination />
      </main>

      <Footer />
    </>
  );
}

export default App;
