import styles from "./MobileFiltersSearchPage.module.css";

export default function MobileFiltersSearchPage({ isOpen, onToggle }) {
  return (
    <div className={styles.mobileFilters}>
      <button
        className={styles.filterToggle}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="search-filters"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16v2.172a2 2 0 0 1-.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48-4.928a2 2 0 0 1-.52-1.345V4z" />
        </svg>

        Filtros
      </button>
    </div>
  );
}