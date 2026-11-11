import styles from "./ResultsSearchPage.module.css";
import ServiceCard from "./ServiceCard.jsx";

import getServices from "../services/serviceService.js";


export default function ResultsSearchPage() {
  const services = getServices();

  return (
    <section className="results">
      <div className={styles.resultsHeader}>
        <p>Resultados 1-12 de 1200</p>
        <div className="sort">
          <label >Ordenar por:</label>

          <select id="sort" name="sort">
            <option value="recommended">Recomendados</option>
            <option value="popular">Popular</option>
            <option value="newest">Nuevos</option>
          </select>
        </div>
      </div>

      <div className={styles.searchServices}>
        {/* Cards */}
          {/* Services */}
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
      </div>
    </section>
  );
}
