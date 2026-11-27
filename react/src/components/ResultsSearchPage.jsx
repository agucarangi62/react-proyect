import styles from "./ResultsSearchPage.module.css";
import ServiceCard from "./ServiceCard.jsx";
import MobileFiltersSearchPage from "./MobileFiltersSearchPage.jsx";

export default function ResultsSearchPage({
  services,
  sortBy,
  onSortChange,
  resultLabel,
  isMobileFiltersOpen,
  onToggleFilters,
}) {
  return (
    <section className={styles.results}>
      <div className={styles.resultsHeader}>
        <p>{resultLabel}</p>

        <div className={styles.resultsControls}>
          <MobileFiltersSearchPage
            isOpen={isMobileFiltersOpen}
            onToggle={onToggleFilters}
          />

          <div className={styles.sort}>

            <select
              id="sort"
              name="sort"
              value={sortBy}
              onChange={(event) => onSortChange(event.target.value)}
            >
              <option value="">Orden predeterminado</option>

              <optgroup label="Precio">
                <option value="price-asc">Menor precio</option>
                <option value="price-desc">Mayor precio</option>
              </optgroup>

              <optgroup label="Fecha">
                <option value="recent">Más recientes</option>
              </optgroup>

              <optgroup label="Popularidad">
                <option value="best-rated">Mejor valorados</option>
                <option value="popular">Más populares</option>
              </optgroup>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.searchServices}>
        {services.length === 0 && (
          <p className={styles.noServices}>
            No se encontraron servicios
          </p>
        )}

        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}
