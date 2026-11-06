export default function SearchFormSectionSearch() {
  return (
    <section className="search-header">
      <h1>Explora los servicios de la comunidad</h1>
      <p>Encuentra el servicio freelance perfecto ahora mismo</p>
      <form action="" role="search">
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
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
          />
          <button type="submit">Buscar</button>
        </div>
      </form>
    </section>
  );
}
