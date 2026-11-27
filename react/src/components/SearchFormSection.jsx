import styles from "./SearchFormSection.module.css";

export default function SearchFormSection() {
  const handleSearch = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const searchTerm = formData.get("search");

    const url = searchTerm
      ? `/search?text=${encodeURIComponent(searchTerm)}`
      : `/search`;

    window.location.href = url; 
  };

  return (
    <>
      <section className={`hero  ${styles.heroBackground}`}>
        <div className={styles.heroContent}>
          <h1>Tus ideas merecen grandes <span>profesionales.</span></h1>

          <p>
            Conectá con freelancers de distintas áreas y encontrá el talento que necesitás para hacerlas realidad.
          </p>

          <form onSubmit={handleSearch} action="" role="search">
            <div className={styles.searchBar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>

              <input
                type="text"
                name="search"
                id="index-search-input"
                placeholder="¿Qué buscas? Ej: Desarrollador web, traductor, etc."
                required
              />

              <button type="submit">Buscar</button>
            </div>
          </form>
        </div>
      </section>
      
    </>
  );
}
