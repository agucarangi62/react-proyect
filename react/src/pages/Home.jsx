import { useState } from "react";

import ServiceCard from "../components/ServiceCard.jsx";
import MobileMenu from "../components/MobileMenu.jsx";
import Pagination from "../components/Pagination.jsx";
import SearchFormSection from "../components/SearchFormSection.jsx";

import getServices from "../services/serviceService.js";

export function HomePage() {
  const services = getServices();

  // Filtros
  const [textToFilter, setTextToFilter] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    rating: "",
    sortBy: "",
  });

  const servicesFiltered = services.filter((service) => {
    return (
      (selectedFilters.category === "" ||
        selectedFilters.category === service.data.category) &&
      (selectedFilters.rating === "" ||
        service.data.rating >= Number(selectedFilters.rating))
    );
  });

  const servicesSearched =
    textToFilter.trim() === ""
      ? servicesFiltered
      : servicesFiltered.filter((service) =>
          service.title.toLowerCase().includes(textToFilter.toLowerCase()),
        );

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

  // Paginación
  const RESULT_PER_PAGE = 8;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(servicesSorted.length / RESULT_PER_PAGE);

  const pagedResult = servicesSorted.slice(
    (currentPage - 1) * RESULT_PER_PAGE,
    currentPage * RESULT_PER_PAGE,
  );

  const handlePageChange = (page) => {
    // Lógica para cambiar de página
    setCurrentPage(page);
  };

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter);
    setCurrentPage(1);
  };

  const handleFilterChange = (filter, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: value,
    }));

    setCurrentPage(1);
  };

  return (
    <>
      <MobileMenu />

      <SearchFormSection
        onFilterChange={handleFilterChange}
        onTextFilter={handleTextFilter}
      />
      <main className="container">
        {/* Popular Services */}
        <section>
          <div className="popular-services">
            <h2>Servicios Populares</h2>
            {/* Grid Servicios */}
            <div className="services">
              {/* Services */}
              {pagedResult.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </section>
        {/* Paginacion */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </>
  );
}
