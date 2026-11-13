import Aside from "../components/Aside.jsx";
import MobileFiltersSearchPage from "../components/MobileFiltersSearchPage.jsx";
import Pagination from "../components/Pagination.jsx";
import ResultsSearchPage from "../components/ResultsSearchPage.jsx";
import SearchFormSectionSearch from "../components/SearchFormSectionSearch.jsx";

import getServices from "../services/serviceService.js";

import { useState } from "react";

export function SearchPage() {
  const services = getServices();

  const [textToFilter, setTextToFilter] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    rating: "",
    sortBy: "",
  });

  const servicesFiltered = services.filter((service) => {
    const { category, price, rating } = service.data;

    const matchesCategory =
      selectedFilters.category === "" || category === selectedFilters.category;

    const matchesMinPrice =
      selectedFilters.minPrice === "" ||
      price >= Number(selectedFilters.minPrice);

    const matchesMaxPrice =
      selectedFilters.maxPrice === "" ||
      price <= Number(selectedFilters.maxPrice);

    const matchesRating =
      selectedFilters.rating === "" || rating >= Number(selectedFilters.rating);

    return (
      matchesCategory && matchesMinPrice && matchesMaxPrice && matchesRating
    );
  });

  const normalizedText = textToFilter.trim().toLowerCase();

  const servicesSearched =
    normalizedText === ""
      ? servicesFiltered
      : servicesFiltered.filter((service) => {
          return (
            service.title.toLowerCase().includes(normalizedText) ||
            service.freelancer.toLowerCase().includes(normalizedText) ||
            service.description.toLowerCase().includes(normalizedText) ||
            service.ubicacion.toLowerCase().includes(normalizedText)
          );
        });

  const servicesSorted = [...servicesSearched];
  switch (selectedFilters.sortBy) {
    case "price-asc":
      servicesSorted.sort((a, b) => a.data.price - b.data.price);
      break;

    case "price-desc":
      servicesSorted.sort((a, b) => b.data.price - a.data.price);
      break;

    case "recent":
      servicesSorted.sort(
        (a, b) => new Date(b.data.publishedAt) - new Date(a.data.publishedAt),
      );
      break;

    case "best-rated":
      servicesSorted.sort(
        (a, b) =>
          b.data.rating - a.data.rating ||
          b.data.ratingCount - a.data.ratingCount,
      );
      break;

    case "popular":
      servicesSorted.sort(
        (a, b) => b.data.completedOrders - a.data.completedOrders,
      );
      break;

    default:
      break;
  }

  // Paginacion
  const RESULT_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(servicesSorted.length / RESULT_PER_PAGE);

  const pagedServices = servicesSorted.slice(
    (currentPage - 1) * RESULT_PER_PAGE,
    currentPage * RESULT_PER_PAGE,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (name, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));

    setCurrentPage(1);
  };

  const handleTextFilter = (text) => {
    setCurrentPage(1);
    setTextToFilter(text);
  };

  const handleClearFilters = () => {
    setCurrentPage(1);

    setSelectedFilters({
      category: "",
      minPrice: "",
      maxPrice: "",
      rating: "",
      sortBy: "",
    });
  };

  const startResult = servicesSorted.length === 0 ? 0 : (currentPage - 1) * RESULT_PER_PAGE + 1;

  const endResult = Math.min(
    currentPage * RESULT_PER_PAGE,
    servicesSorted.length,
  );

  const resultLabel =
    servicesSorted.length === 0
      ? "0 resultados"
      : `Resultados ${startResult}-${endResult} de ${servicesSorted.length}`;

  return (
    <main className="search-page">
      <div className="search-layout">
        <Aside
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
        />
        <section className="search-content">
          <SearchFormSectionSearch onTextFilter={handleTextFilter} />
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
