import styles from "./Aside.module.css";

export default function Aside() {
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
            <label className={styles.checkboxOption}>
              <input type="checkbox" checked />
              <span>Web Design</span>
            </label>

            <label className={styles.checkboxOption}>
              <input type="checkbox" />
              <span>Copywriting</span>
            </label>

            <label className={styles.checkboxOption}>
              <input type="checkbox" />
              <span>Logo Design</span>
            </label>

            <label className={styles.checkboxOption}>
              <input type="checkbox" />
              <span>Video Editing</span>
            </label>
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
            <input type="range" />

            <div className={styles.priceValues}>
              <span>$5</span>
              <span>$1000+</span>
            </div>
          </div>
        </details>

        {/* Rate */}
        <details className={styles.filterGroup}>
          <summary className={styles.filterHeader}>
            <span>Rate</span>
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
            <label className={styles.checkboxOption}>
              <input type="checkbox" />
              <span>★ 4 Estrellas o mas</span>
            </label>

            <label className={styles.checkboxOption}>
              <input type="checkbox" />
              <span>★ 3 Estrellas o mas</span>
            </label>
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
          <button className={styles.btnSecondary} type="reset">
            Limpiar
          </button>
        </div>
      </form>
    </aside>
  );
}
