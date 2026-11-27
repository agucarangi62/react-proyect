import styles from "./Search.module.css";
import Aside from "../components/Aside.jsx";
import Pagination from "../components/Pagination.jsx";
import ResultsSearchPage from "../components/ResultsSearchPage.jsx";
import SearchFormSectionSearch from "../components/SearchFormSectionSearch.jsx";

import getServices from "../services/serviceService.js";
import { useSearchServices } from "../hooks/useSearchServices.js";
import { useState } from "react";

export default function SearchPage() {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const handleToggleMobileFilters = () => {
    setIsMobileFiltersOpen((prev) => !prev);
  };

  const handleCloseMobileFilters = () => {
    setIsMobileFiltersOpen(false);
  };

  const services = getServices();

  const {
    selectedFilters,
    currentPage,
    pagedServices,
    totalPages,
    resultLabel,
    totalResults,
    textToFilter,
    handlePageChange,
    handleFilterChange,
    handleTextFilter,
    handleClearFilters,
  } = useSearchServices(services);

  const title = `Resultados ${totalResults}, Página ${currentPage} - ServiceMarket`;

  return (
    <main className={styles.searchPage}>
      <title>{title}</title>
      <div className={styles.searchLayout}>
        <Aside
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          isOpen={isMobileFiltersOpen}
          onClose={handleCloseMobileFilters}
        />
        <section className={styles.searchContent}>
          <SearchFormSectionSearch
            onTextFilter={handleTextFilter}
            inicialText={textToFilter}
          />
          <ResultsSearchPage
            services={pagedServices}
            sortBy={selectedFilters.sortBy}
            onSortChange={(value) => handleFilterChange("sortBy", value)}
            resultLabel={resultLabel}
            isMobileFiltersOpen={isMobileFiltersOpen}
            onToggleFilters={handleToggleMobileFilters}
          />
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </section>
      </div>
    </main>
  );
}
