import Aside from "../components/Aside.jsx";
import MobileFiltersSearchPage from "../components/MobileFiltersSearchPage.jsx";
import Pagination from "../components/Pagination.jsx";
import ResultsSearchPage from "../components/ResultsSearchPage.jsx";
import SearchFormSectionSearch from "../components/SearchFormSectionSearch.jsx";

import getServices from "../services/serviceService.js";
import { useSearchServices } from "../hooks/useSearchServices.js";

export default function SearchPage() {
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
    <main className="search-page">
      <title>{title}</title>
      <div className="search-layout">
        <Aside
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
        />
        <section className="search-content">
          <SearchFormSectionSearch onTextFilter={handleTextFilter} inicialText={textToFilter}/>
          <MobileFiltersSearchPage />
          <ResultsSearchPage
            services={pagedServices}
            sortBy={selectedFilters.sortBy}
            onSortChange={(value) => handleFilterChange("sortBy", value)}
            resultLabel={resultLabel}
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
