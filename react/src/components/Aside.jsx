export default function Aside() {
  return (
    <aside className="filters-aside">
      <button className="filters-close" type="button">
        ✕
      </button>
      <h2 className="filters-title">Filtros</h2>

      <form className="filters-form">
        {/* Category */}
        <details className="filter-group" open>
          <summary className="filter-header">
            <span>Categoria</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down chevron"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </summary>

          <div className="filter-content">
            <label className="checkbox-option">
              <input type="checkbox" checked />
              <span>Web Design</span>
            </label>

            <label className="checkbox-option">
              <input type="checkbox" />
              <span>Copywriting</span>
            </label>

            <label className="checkbox-option">
              <input type="checkbox" />
              <span>Logo Design</span>
            </label>

            <label className="checkbox-option">
              <input type="checkbox" />
              <span>Video Editing</span>
            </label>
          </div>
        </details>

        {/* Price */}
        <details className="filter-group" open>
          <summary className="filter-header">
            <span>Rango de precios</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down chevron"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </summary>

          <div className="filter-content">
            <input type="range" />

            <div className="price-values">
              <span>$5</span>
              <span>$1000+</span>
            </div>
          </div>
        </details>

        {/* Rate */}
        <details className="filter-group">
          <summary className="filter-header">
            <span>Rate</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down chevron"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </summary>

          <div className="filter-content">
            <label className="checkbox-option">
              <input type="checkbox" />
              <span>★ 4 Estrellas o mas</span>
            </label>

            <label className="checkbox-option">
              <input type="checkbox" />
              <span>★ 3 Estrellas o mas</span>
            </label>
          </div>
        </details>

        {/* Delivery time */}
        <details className="filter-group">
          <summary className="filter-header">
            <span>Tiempo de entrega</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down chevron"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </summary>

          <div className="filter-content">
            <select>
              <option>Cualquiera</option>
              <option>En menos de 24 horas</option>
              <option>En menos de 3 dias</option>
              <option>En menos de 7 dias</option>
            </select>
          </div>
        </details>

        {/* Language */}
        <details className="filter-group">
          <summary className="filter-header">
            <span>Idioma</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down chevron"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          </summary>

          <div className="filter-content">
            <select>
              <option>Cualquiera</option>
              <option>Español</option>
              <option>Inglés</option>
              <option>Frances</option>
              <option>Italiano</option>
            </select>
          </div>
        </details>

        <div className="filter-actions">
          <button className="btn-primary" type="submit">
            Aplicar
          </button>
          <button className="btn-secondary" type="reset">
            Limpiar
          </button>
        </div>
      </form>
    </aside>
  );
}
