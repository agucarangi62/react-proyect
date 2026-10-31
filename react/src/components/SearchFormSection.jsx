import Filters from "./Filters.jsx";

export default function SearchFormSection() {
  return (
    <section className="hero">
      <h1>Encuentra el servicio freelance perfecto ahora mismo</h1>

      <p>
        Descubra un mundo de talentos de primer nivel para cualquier proyecto,
        presupuesto y fecha límite.
      </p>

      <form action="" role="search">
        <div className="search-bar">
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
            name="search"
            id="index-search-input"
            placeholder="¿Qué buscas? Ej: Desarrollador web, traductor, etc."
          />

          <button type="submit">Buscar</button>
        </div>
      </form>

      <div className="container">
        {/* filters */}
        <Filters />
      </div>
    </section>
  );
}
