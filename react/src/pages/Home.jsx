import styles from "./Home.module.css";
import ServiceCard from "../components/ServiceCard.jsx";
import SearchFormSection from "../components/SearchFormSection.jsx";

import getServices from "../services/serviceService.js";

export default function HomePage() {
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
      <SearchFormSection />
      <main className="container">
        <title>ServiceMarket - Encuentra servicios freelance</title>
        <section>
          <div className={styles.popularServices}>
            <h2>Servicios Populares</h2>

            <div className={styles.services}>
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
