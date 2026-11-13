import styles from "./ResultsSearchPage.module.css";
import ServiceCard from "./ServiceCard.jsx";

export default function ResultsSearchPage({
  services,
  sortBy,
  onSortChange,
  resultLabel,
}) {
  return (
    <section className="results">
      <div className={styles.resultsHeader}>
        <p>{resultLabel}</p>
        <div className="sort">
          <label>Ordenar por:</label>

          <select
            id="sort"
            name="sort"
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
          >
            <option value="">Orden predeterminado</option>
            <option value="price-asc">Menor precio</option>
            <option value="price-desc">Mayor precio</option>
            <option value="recent">Más recientes</option>
            <option value="best-rated">Mejor valorados</option>
            <option value="popular">Más populares</option>
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
