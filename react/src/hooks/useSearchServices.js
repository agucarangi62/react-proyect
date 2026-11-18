import { useEffect, useState } from "react";

const INITIAL_FILTERS = {
  category: "",
  minPrice: "",
  maxPrice: "",
  rating: "",
  sortBy: "",
  deliveryTime: "",
  language: "",
};

const RESULT_PER_PAGE = 8;

export function useSearchServices(services) {
  const [textToFilter, setTextToFilter] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("text") || "";
  });

  const [debouncedText, setDebouncedText] = useState("");

  const [selectedFilters, setSelectedFilters] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return {
      ...INITIAL_FILTERS,
      category: params.get("category") || "",
      minPrice: params.get("minPrice") || "",
      maxPrice: params.get("maxPrice") || "",
      rating: params.get("rating") || "",
      sortBy: params.get("sortBy") || "",
    };
  });

  const [currentPage, setCurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get("page");
    const page = Number(pageParam);

    return pageParam !== null && Number.isInteger(page) && page > 0 ? page : 1;
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(textToFilter);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [textToFilter]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (debouncedText) params.append("text", debouncedText);
    if (selectedFilters.category)
      params.append("category", selectedFilters.category);
    if (selectedFilters.minPrice)
      params.append("minPrice", selectedFilters.minPrice);
    if (selectedFilters.maxPrice)
      params.append("maxPrice", selectedFilters.maxPrice);
    if (selectedFilters.rating) params.append("rating", selectedFilters.rating);
    if (selectedFilters.sortBy) params.append("sortBy", selectedFilters.sortBy);

    if (currentPage > 1) {
      params.append("page", currentPage);
    }

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : `${window.location.pathname}`;

    window.history.pushState({}, "", newUrl);
  }, [selectedFilters, debouncedText, currentPage]);

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

  const normalizedText = debouncedText.trim().toLowerCase();

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

  // Paginación
  const totalResults = servicesSorted.length;

  const totalPages = Math.ceil(totalResults / RESULT_PER_PAGE);

  const pagedServices = servicesSorted.slice(
    (currentPage - 1) * RESULT_PER_PAGE,
    currentPage * RESULT_PER_PAGE,
  );

  const endResult = Math.min(currentPage * RESULT_PER_PAGE, totalResults);

  const resultLabel =
    totalResults === 0
      ? "0 resultados"
      : `Resultados ${endResult} de ${totalResults}`;

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

    setSelectedFilters({ ...INITIAL_FILTERS });
  };

  return {
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
  };
}
