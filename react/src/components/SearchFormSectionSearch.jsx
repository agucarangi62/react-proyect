import styles from "./SearchFormSection.module.css";
import styles2 from "./SearchFormSectionSearch.module.css";

export default function SearchFormSectionSearch({ onTextFilter }) {
  const handleTextChange = (event) => {
    onTextFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };



  return (
    <section className={styles2.searchHeader}>
      <h1>Explora los servicios de la comunidad</h1>
      <p>Encuentra el servicio freelance perfecto ahora mismo</p>
      <form onSubmit={handleSubmit} role="search">
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>

          <input
            type="text"
            name=""
            id=""
            placeholder="¿Qué buscas? Ej: Desarrollador web, traductor, etc."
            onChange={handleTextChange}
          />
          <button type="submit">Buscar</button>
        </div>
      </form>
    </section>
  );
}
