import styles from "./Filters.module.css";
import { useState } from "react";

export default function Filters({ onFilterChange }) {
  const [openFilter, setOpenFilter] = useState(null);
  const [filterLabels, setFilterLabels] = useState({});

  const handleFilterChange = (event) => {
    const filter = event.currentTarget.dataset.filter;
    const option = event.target.closest("li");
    const value = option.dataset.value;
    const label = option.textContent;

    if (!option) return;

    setFilterLabels((prevLabels) => ({
      ...prevLabels,
      [filter]: value === "" ? "" : label,
    }));

    onFilterChange(filter, value);

    setOpenFilter(null);
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filterDropdown}>
        <button
          className={styles.filterBtn}
          onClick={() => {
            setOpenFilter(openFilter === "category" ? null : "category");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-category"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4h6v6h-6l0 -6" />
            <path d="M14 4h6v6h-6l0 -6" />
            <path d="M4 14h6v6h-6l0 -6" />
            <path d="M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          </svg>
          <p>{filterLabels.category || "Categoría"}</p>
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </button>
        <div
          className={`${styles.dropdownMenu} ${openFilter === "category" ? styles.active : ""}`}
        >
          <ul
            role="listbox"
            onClick={handleFilterChange}
            data-filter="category"
          >
            <li role="option" data-value="">
              Todas
            </li>
            <li role="option" data-value="technology">
              Programación y tecnología
            </li>
            <li role="option" data-value="marketing">
              Marketing digital
            </li>
            <li role="option" data-value="writing">
              Escritura y traducción
            </li>
            <li role="option" data-value="music">
              Música y audio
            </li>
            <li role="option" data-value="business">
              Business
            </li>
            <li role="option" data-value="ia">
              Inteligencia artificial
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.filterDropdown}>
        <button
          className={styles.filterBtn}
          onClick={() =>
            setOpenFilter(openFilter === "rating" ? null : "rating")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-star"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" />
          </svg>
          <p>{filterLabels.rating || "Calificación"}</p>
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </button>
        <div
          className={`${styles.dropdownMenu} ${openFilter === "rating" ? styles.active : ""}`}
        >
          <ul role="listbox" onClick={handleFilterChange} data-filter="rating">
            <li role="option" data-value="">
              Todas
            </li>
            <li role="option" data-value="5">
              ★★★★★
            </li>
            <li role="option" data-value="4">
              ★★★★
            </li>
            <li role="option" data-value="3">
              ★★★
            </li>
            <li role="option" data-value="2">
              ★★
            </li>
            <li role="option" data-value="1">
              ★
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.filterDropdown} ${styles.sortDropdown}`}>
        <button
          className={`${styles.filterBtn} ${styles.sortBtn}`}
          onClick={() =>
            setOpenFilter(openFilter === "sortBy" ? null : "sortBy")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M4 6l8 0" />
            <path d="M16 6l4 0" />
            <path d="M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M4 12l2 0" />
            <path d="M10 12l10 0" />
            <path d="M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M4 18l11 0" />
            <path d="M19 18l1 0" />
          </svg>
          <p>{filterLabels.sortBy || "Ordenar por"}</p>
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </button>
        <div
          className={`${styles.dropdownMenu} ${openFilter === "sortBy" ? styles.active : ""}`}
        >
          <ul role="listbox" onClick={handleFilterChange} data-filter="sortBy">
            <li role="option" data-value="">
              Predeterminado
            </li>
            <hr />

            <li className={styles.dropdownHeading}>Precio</li>

            <li role="option" data-value="price-asc">
              Menor precio
            </li>

            <li role="option" data-value="price-desc">
              Mayor precio
            </li>
            <hr />

            <li className={styles.dropdownHeading}>Fecha</li>
            <li role="option" data-value="recent">
              Más recientes
            </li>
            <hr />

            <li className={styles.dropdownHeading}>Popularidad</li>
            <li role="option" data-value="best-rated">
              Mejor valorados
            </li>

            <li role="option" data-value="popular">
              Más populares
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
