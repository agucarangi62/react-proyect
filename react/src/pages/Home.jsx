
import ServiceCard from "../components/ServiceCard.jsx";
import MobileMenu from "../components/MobileMenu.jsx";
import SearchFormSection from "../components/SearchFormSection.jsx";

import getServices from "../services/serviceService.js";

export function HomePage() {
  const services = getServices();

  const popularServices = [...services]
    .sort((a, b) => {
      return (
        b.data.completedOrders - a.data.completedOrders ||
        b.data.ratingCount - a.data.ratingCount ||
        b.data.rating - a.data.rating
      );
    })
    .slice(0, 9);

  return (
    <>
      <MobileMenu />

      <SearchFormSection />

      <main className="container">
        <section>
          <div className="popular-services">
            <h2>Servicios Populares</h2>

            <div className="services">
              {popularServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
