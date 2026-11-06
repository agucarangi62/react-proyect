export default function ResultsSearchPage() {
  return (
    <section className="results">
      <div className="results-header">
        <p>Resultados 1-12 de 1200</p>
        <div className="sort">
          <label for="sort">Ordenar por:</label>

          <select id="sort" name="sort">
            <option value="recommended">Recomendados</option>
            <option value="popular">Popular</option>
            <option value="newest">Nuevos</option>
          </select>
        </div>
      </div>

      <div className="search-services">
        {/* Cards */}
        <article className="service-card">
          <header className="card-header">
            <div className="card-image">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcq__tFWuWUiuRWGvRRtGeKJTYeJn8tkHWGYq6qwXO0q7vwensRSqbaLjYQbIv5Vu8cEp5BYbwA3R1atgRIIWYIkp6jdJ04jkJfHBerwkg2bhKO8-N8LfEWEkXdmjlhsBjLc5nlpOLokf2UbY6_6h2nEVQvKXXTV34PGi3Ifhr7nbw2WzF8xgj9gpAdbCecZw-NQ4DWr9wflpBzAu4YDv_rfjWy7YXiaQHKOcXUZofYxC5bAEi-j0OlaCrUCuq5Lsn8sLdQjQk6A"
                alt=""
              />
            </div>
          </header>

          <div className="card-body">
            <div className="card-seller">
              <img
                alt="Samantha Lee's avatar"
                className="w-6 h-6 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ5nkRJXucyObC5ET91nPXEoWUlwr0pAvfO1fBNNgfE-a4jTfVi831ZDkCL4qd-dRjo9u5UQIQ_mE1nuAHHEoOwyEVzKS4ozGd4uOqRbWM1u6ZYT1RnIbVVm4Eo0VnnxQZsSu_wsmcs17-6t0HLPYagGBEPYmhHazzkP-_S3YGst8RQL1_zeh0pC1vFGhdEgG4_E_WOf-_M49uVJ9agR7m-ksSdRJP039gZmC2jLvcZLkRMrHBSPnmP7YiFfEny9SLAoQNhx2I8g"
              />
              <p>Samantha Lee</p>
            </div>

            <p className="card-title">
              I will create a modern minimalist logo design
            </p>

            <div className="card-rating">
              <span>★</span>
              <strong>4.9</strong>
              <p>(245)</p>
            </div>
          </div>

          <footer className="card-search-footer">
            <button className="fav-footer-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </button>

            <button className="fav-footer-btn btn-add">Agregar</button>

            <p>
              From <span>$50</span>
            </p>
          </footer>
        </article>

        <article className="service-card">
          <header className="card-header">
            <div className="card-image">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcq__tFWuWUiuRWGvRRtGeKJTYeJn8tkHWGYq6qwXO0q7vwensRSqbaLjYQbIv5Vu8cEp5BYbwA3R1atgRIIWYIkp6jdJ04jkJfHBerwkg2bhKO8-N8LfEWEkXdmjlhsBjLc5nlpOLokf2UbY6_6h2nEVQvKXXTV34PGi3Ifhr7nbw2WzF8xgj9gpAdbCecZw-NQ4DWr9wflpBzAu4YDv_rfjWy7YXiaQHKOcXUZofYxC5bAEi-j0OlaCrUCuq5Lsn8sLdQjQk6A"
                alt=""
              />
            </div>
          </header>

          <div className="card-body">
            <div className="card-seller">
              <img
                alt="Samantha Lee's avatar"
                className="w-6 h-6 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ5nkRJXucyObC5ET91nPXEoWUlwr0pAvfO1fBNNgfE-a4jTfVi831ZDkCL4qd-dRjo9u5UQIQ_mE1nuAHHEoOwyEVzKS4ozGd4uOqRbWM1u6ZYT1RnIbVVm4Eo0VnnxQZsSu_wsmcs17-6t0HLPYagGBEPYmhHazzkP-_S3YGst8RQL1_zeh0pC1vFGhdEgG4_E_WOf-_M49uVJ9agR7m-ksSdRJP039gZmC2jLvcZLkRMrHBSPnmP7YiFfEny9SLAoQNhx2I8g"
              />
              <p>Samantha Lee</p>
            </div>

            <p className="card-title">
              I will create a modern minimalist logo design
            </p>

            <div className="card-rating">
              <span>★</span>
              <strong>4.9</strong>
              <p>(245)</p>
            </div>
          </div>

          <footer className="card-search-footer">
            <button className="fav-footer-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </button>

            <button className="fav-footer-btn btn-add">Agregar</button>

            <p>
              From <span>$50</span>
            </p>
          </footer>
        </article>

        <article className="service-card">
          <header className="card-header">
            <div className="card-image">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcq__tFWuWUiuRWGvRRtGeKJTYeJn8tkHWGYq6qwXO0q7vwensRSqbaLjYQbIv5Vu8cEp5BYbwA3R1atgRIIWYIkp6jdJ04jkJfHBerwkg2bhKO8-N8LfEWEkXdmjlhsBjLc5nlpOLokf2UbY6_6h2nEVQvKXXTV34PGi3Ifhr7nbw2WzF8xgj9gpAdbCecZw-NQ4DWr9wflpBzAu4YDv_rfjWy7YXiaQHKOcXUZofYxC5bAEi-j0OlaCrUCuq5Lsn8sLdQjQk6A"
                alt=""
              />
            </div>
          </header>

          <div className="card-body">
            <div className="card-seller">
              <img
                alt="Samantha Lee's avatar"
                className="w-6 h-6 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ5nkRJXucyObC5ET91nPXEoWUlwr0pAvfO1fBNNgfE-a4jTfVi831ZDkCL4qd-dRjo9u5UQIQ_mE1nuAHHEoOwyEVzKS4ozGd4uOqRbWM1u6ZYT1RnIbVVm4Eo0VnnxQZsSu_wsmcs17-6t0HLPYagGBEPYmhHazzkP-_S3YGst8RQL1_zeh0pC1vFGhdEgG4_E_WOf-_M49uVJ9agR7m-ksSdRJP039gZmC2jLvcZLkRMrHBSPnmP7YiFfEny9SLAoQNhx2I8g"
              />
              <p>Samantha Lee</p>
            </div>

            <p className="card-title">
              I will create a modern minimalist logo design
            </p>

            <div className="card-rating">
              <span>★</span>
              <strong>4.9</strong>
              <p>(245)</p>
            </div>
          </div>

          <footer className="card-search-footer">
            <button className="fav-footer-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </button>

            <button className="fav-footer-btn btn-add">Agregar</button>

            <p>
              From <span>$50</span>
            </p>
          </footer>
        </article>

        <article className="service-card">
          <header className="card-header">
            <div className="card-image">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcq__tFWuWUiuRWGvRRtGeKJTYeJn8tkHWGYq6qwXO0q7vwensRSqbaLjYQbIv5Vu8cEp5BYbwA3R1atgRIIWYIkp6jdJ04jkJfHBerwkg2bhKO8-N8LfEWEkXdmjlhsBjLc5nlpOLokf2UbY6_6h2nEVQvKXXTV34PGi3Ifhr7nbw2WzF8xgj9gpAdbCecZw-NQ4DWr9wflpBzAu4YDv_rfjWy7YXiaQHKOcXUZofYxC5bAEi-j0OlaCrUCuq5Lsn8sLdQjQk6A"
                alt=""
              />
            </div>
          </header>

          <div className="card-body">
            <div className="card-seller">
              <img
                alt="Samantha Lee's avatar"
                className="w-6 h-6 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ5nkRJXucyObC5ET91nPXEoWUlwr0pAvfO1fBNNgfE-a4jTfVi831ZDkCL4qd-dRjo9u5UQIQ_mE1nuAHHEoOwyEVzKS4ozGd4uOqRbWM1u6ZYT1RnIbVVm4Eo0VnnxQZsSu_wsmcs17-6t0HLPYagGBEPYmhHazzkP-_S3YGst8RQL1_zeh0pC1vFGhdEgG4_E_WOf-_M49uVJ9agR7m-ksSdRJP039gZmC2jLvcZLkRMrHBSPnmP7YiFfEny9SLAoQNhx2I8g"
              />
              <p>Samantha Lee</p>
            </div>

            <p className="card-title">
              I will create a modern minimalist logo design
            </p>

            <div className="card-rating">
              <span>★</span>
              <strong>4.9</strong>
              <p>(245)</p>
            </div>
          </div>

          <footer className="card-search-footer">
            <button className="fav-footer-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>

              <button className="fav-footer-btn btn-add">Agregar</button>
            </button>
            <p>
              From <span>$50</span>
            </p>
          </footer>
        </article>
      </div>
    </section>
  );
}
