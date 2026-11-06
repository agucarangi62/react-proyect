import Aside from "../components/Aside.jsx";
import MobileFiltersSearchPage from "../components/MobileFiltersSearchPage.jsx";
import Pagination from "../components/Pagination.jsx";
import ResultsSearchPage from "../components/ResultsSearchPage.jsx";
import SearchFormSectionSearch from "../components/SearchFormSectionSearch.jsx";

export function SearchPage() {
  return (
    <main className="search-page">
      <div className="search-layout">
        <Aside />
        <section className="search-content">
          <SearchFormSectionSearch />
          <MobileFiltersSearchPage />
          <ResultsSearchPage />
          <Pagination />
        </section>
      </div>
    </main>
  );
}
