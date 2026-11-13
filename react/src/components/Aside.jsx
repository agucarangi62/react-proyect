import styles from "./Aside.module.css";

export default function Aside({
  selectedFilters,
  onFilterChange,
  onClearFilters,
}) {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    onFilterChange(name, value);
  };

  return (
    <aside className={styles.filtersAside}>
      <button className={styles.filtersClose} type="button">
        ✕
      </button>
      <h2 className={styles.filtersTitle}>Filtros</h2>

      <form className={styles.filtersForm}>
        {/* Category */}
        <details className={styles.filterGroup} open>
          <summary className={styles.filterHeader}>
            <span>Categoria</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down ${styles.chevron}`}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </summary>

          <div className={styles.filterContent}>
            <select
              name="category"
              value={selectedFilters.category}
              onChange={handleFilterChange}
            >
              <option value="">Todas las categorías</option>
              <option value="technology">Programación y tecnología</option>
              <option value="marketing">Marketing digital</option>
              <option value="writing">Escritura y traducción</option>
              <option value="music">Música y audio</option>
              <option value="business">Business</option>
              <option value="ia">Inteligencia artificial</option>
            </select>
          </div>
        </details>

        {/* Price */}
        <details className={styles.filterGroup} open>
          <summary className={styles.filterHeader}>
            <span>Rango de precios</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down ${styles.chevron}`}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </summary>

          <div className={styles.filterContent}>
            <label htmlFor="minPrice">Precio mínimo</label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              min="0"
              placeholder="Desde"
              value={selectedFilters.minPrice}
              onChange={handleFilterChange}
            />

            <label htmlFor="maxPrice">Precio máximo</label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              min="0"
              placeholder="Hasta"
              value={selectedFilters.maxPrice}
              onChange={handleFilterChange}
            />
          </div>
        </details>

        {/* Rate */}
        <details className={styles.filterGroup}>
          <summary className={styles.filterHeader}>
            <span>Valoración</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down ${styles.chevron}`}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </summary>

          <div className={styles.filterContent}>
            <select
              name="rating"
              value={selectedFilters.rating}
              onChange={handleFilterChange}
            >
              <option value="">Cualquier valoración</option>
              <option value="3">3 estrellas o más</option>
              <option value="4">4 estrellas o más</option>
              <option value="5">5 estrellas</option>
            </select>
          </div>
        </details>

        {/* Delivery time */}
        <details className={styles.filterGroup}>
          <summary className={styles.filterHeader}>
            <span>Tiempo de entrega</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down ${styles.chevron}`}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </summary>

          <div className={styles.filterContent}>
            <select>
              <option>Cualquiera</option>
              <option>En menos de 24 horas</option>
              <option>En menos de 3 dias</option>
              <option>En menos de 7 dias</option>
            </select>
          </div>
        </details>

        {/* Language */}
        <details className={styles.filterGroup}>
          <summary className={styles.filterHeader}>
            <span>Idioma</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-down ${styles.chevron}`}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </summary>

          <div className={styles.filterContent}>
            <select>
              <option>Cualquiera</option>
              <option>Español</option>
              <option>Inglés</option>
              <option>Frances</option>
              <option>Italiano</option>
            </select>
          </div>
        </details>

        <div className={styles.filterActions}>
          <button className={styles.btnPrimary} type="submit">
            Aplicar
          </button>
          <button
            className={styles.btnSecondary}
            type="button"
            onClick={onClearFilters}
          >
            Limpiar
          </button>
        </div>
      </form>
    </aside>
  );
}
