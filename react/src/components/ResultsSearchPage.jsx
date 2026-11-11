import styles from "./ResultsSearchPage.module.css";

export default function ResultsSearchPage() {
  return (
    <section className="results">
      <div className={styles.resultsHeader}>
        <p>Resultados 1-12 de 1200</p>
        <div className="sort">
          <label >Ordenar por:</label>

          <select id="sort" name="sort">
            <option value="recommended">Recomendados</option>
            <option value="popular">Popular</option>
            <option value="newest">Nuevos</option>
          </select>
        </div>
      </div>

      <div className={styles.searchServices}>
        {/* Cards */}
        <article className={styles.serviceCard}>
          <header className={styles.cardHeader}>
            <div className={styles.cardImage}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcq__tFWuWUiuRWGvRRtGeKJTYeJn8tkHWGYq6qwXO0q7vwensRSqbaLjYQbIv5Vu8cEp5BYbwA3R1atgRIIWYIkp6jdJ04jkJfHBerwkg2bhKO8-N8LfEWEkXdmjlhsBjLc5nlpOLokf2UbY6_6h2nEVQvKXXTV34PGi3Ifhr7nbw2WzF8xgj9gpAdbCecZw-NQ4DWr9wflpBzAu4YDv_rfjWy7YXiaQHKOcXUZofYxC5bAEi-j0OlaCrUCuq5Lsn8sLdQjQk6A"
                alt=""
              />
            </div>
          </header>

          <div className={styles.cardBody}>
            <div className={styles.cardSeller}>
              <img
                alt="Samantha Lee's avatar"
                className="w-6 h-6 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ5nkRJXucyObC5ET91nPXEoWUlwr0pAvfO1fBNNgfE-a4jTfVi831ZDkCL4qd-dRjo9u5UQIQ_mE1nuAHHEoOwyEVzKS4ozGd4uOqRbWM1u6ZYT1RnIbVVm4Eo0VnnxQZsSu_wsmcs17-6t0HLPYagGBEPYmhHazzkP-_S3YGst8RQL1_zeh0pC1vFGhdEgG4_E_WOf-_M49uVJ9agR7m-ksSdRJP039gZmC2jLvcZLkRMrHBSPnmP7YiFfEny9SLAoQNhx2I8g"
              />
              <p>Samantha Lee</p>
            </div>

            <p className={styles.cardTitle}>
              I will create a modern minimalist logo design
            </p>

            <p className={styles.cardDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus assumenda quibusdam illum eaque reprehenderit, maiores dolore provident, beatae tenetur, officiis animi excepturi! Tempore sint placeat debitis dolorum, itaque quasi nesciunt?</p>

            <div className={styles.cardRating}>
              <span>★</span>
              <strong>4.9</strong>
              <p>(245)</p>
            </div>
          </div>

          <footer className={styles.cardSearchFooter}>
            <button className={styles.favFooterBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </button>

            <button className={`${styles.favFooterBtn} ${styles.btnAdd}`}>Agregar</button>

            <p>
              From <span>$50</span>
            </p>
          </footer>
        </article>

        <article className={styles.serviceCard}>
          <header className={styles.cardHeader}>
            <div className={styles.cardImage}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcq__tFWuWUiuRWGvRRtGeKJTYeJn8tkHWGYq6qwXO0q7vwensRSqbaLjYQbIv5Vu8cEp5BYbwA3R1atgRIIWYIkp6jdJ04jkJfHBerwkg2bhKO8-N8LfEWEkXdmjlhsBjLc5nlpOLokf2UbY6_6h2nEVQvKXXTV34PGi3Ifhr7nbw2WzF8xgj9gpAdbCecZw-NQ4DWr9wflpBzAu4YDv_rfjWy7YXiaQHKOcXUZofYxC5bAEi-j0OlaCrUCuq5Lsn8sLdQjQk6A"
                alt=""
              />
            </div>
          </header>

          <div className={styles.cardBody}>
            <div className={styles.cardSeller}>
              <img
                alt="Samantha Lee's avatar"
                className="w-6 h-6 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ5nkRJXucyObC5ET91nPXEoWUlwr0pAvfO1fBNNgfE-a4jTfVi831ZDkCL4qd-dRjo9u5UQIQ_mE1nuAHHEoOwyEVzKS4ozGd4uOqRbWM1u6ZYT1RnIbVVm4Eo0VnnxQZsSu_wsmcs17-6t0HLPYagGBEPYmhHazzkP-_S3YGst8RQL1_zeh0pC1vFGhdEgG4_E_WOf-_M49uVJ9agR7m-ksSdRJP039gZmC2jLvcZLkRMrHBSPnmP7YiFfEny9SLAoQNhx2I8g"
              />
              <p>Samantha Lee</p>
            </div>

            <p className={styles.cardTitle}>
              I will create a modern minimalist logo design
            </p>

            <p className={styles.cardDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus assumenda quibusdam illum eaque reprehenderit, maiores dolore provident, beatae tenetur, officiis animi excepturi! Tempore sint placeat debitis dolorum, itaque quasi nesciunt?</p>

            <div className={styles.cardRating}>
              <span>★</span>
              <strong>4.9</strong>
              <p>(245)</p>
            </div>
          </div>

          <footer className={styles.cardSearchFooter}>
            <button className={styles.favFooterBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </button>

            <button className={`${styles.favFooterBtn} ${styles.btnAdd}`}>Agregar</button>

            <p>
              From <span>$50</span>
            </p>
          </footer>
        </article>

        <article className={styles.serviceCard}>
          <header className={styles.cardHeader}>
            <div className={styles.cardImage}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcq__tFWuWUiuRWGvRRtGeKJTYeJn8tkHWGYq6qwXO0q7vwensRSqbaLjYQbIv5Vu8cEp5BYbwA3R1atgRIIWYIkp6jdJ04jkJfHBerwkg2bhKO8-N8LfEWEkXdmjlhsBjLc5nlpOLokf2UbY6_6h2nEVQvKXXTV34PGi3Ifhr7nbw2WzF8xgj9gpAdbCecZw-NQ4DWr9wflpBzAu4YDv_rfjWy7YXiaQHKOcXUZofYxC5bAEi-j0OlaCrUCuq5Lsn8sLdQjQk6A"
                alt=""
              />
            </div>
          </header>

          <div className={styles.cardBody}>
            <div className={styles.cardSeller}>
              <img
                alt="Samantha Lee's avatar"
                className="w-6 h-6 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ5nkRJXucyObC5ET91nPXEoWUlwr0pAvfO1fBNNgfE-a4jTfVi831ZDkCL4qd-dRjo9u5UQIQ_mE1nuAHHEoOwyEVzKS4ozGd4uOqRbWM1u6ZYT1RnIbVVm4Eo0VnnxQZsSu_wsmcs17-6t0HLPYagGBEPYmhHazzkP-_S3YGst8RQL1_zeh0pC1vFGhdEgG4_E_WOf-_M49uVJ9agR7m-ksSdRJP039gZmC2jLvcZLkRMrHBSPnmP7YiFfEny9SLAoQNhx2I8g"
              />
              <p>Samantha Lee</p>
            </div>

            <p className={styles.cardTitle}>
              I will create a modern minimalist logo design
            </p>

            <p className={styles.cardDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus assumenda quibusdam illum eaque reprehenderit, maiores dolore provident, beatae tenetur, officiis animi excepturi! Tempore sint placeat debitis dolorum, itaque quasi nesciunt?</p>

            <div className={styles.cardRating}>
              <span>★</span>
              <strong>4.9</strong>
              <p>(245)</p>
            </div>
          </div>

          <footer className={styles.cardSearchFooter}>
            <button className={styles.favFooterBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </button>

            <button className={`${styles.favFooterBtn} ${styles.btnAdd}`}>Agregar</button>

            <p>
              From <span>$50</span>
            </p>
          </footer>
        </article>

        <article className={styles.serviceCard}>
          <header className={styles.cardHeader}>
            <div className={styles.cardImage}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcq__tFWuWUiuRWGvRRtGeKJTYeJn8tkHWGYq6qwXO0q7vwensRSqbaLjYQbIv5Vu8cEp5BYbwA3R1atgRIIWYIkp6jdJ04jkJfHBerwkg2bhKO8-N8LfEWEkXdmjlhsBjLc5nlpOLokf2UbY6_6h2nEVQvKXXTV34PGi3Ifhr7nbw2WzF8xgj9gpAdbCecZw-NQ4DWr9wflpBzAu4YDv_rfjWy7YXiaQHKOcXUZofYxC5bAEi-j0OlaCrUCuq5Lsn8sLdQjQk6A"
                alt=""
              />
            </div>
          </header>

          <div className={styles.cardBody}>
            <div className={styles.cardSeller}>
              <img
                alt="Samantha Lee's avatar"
                className="w-6 h-6 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ5nkRJXucyObC5ET91nPXEoWUlwr0pAvfO1fBNNgfE-a4jTfVi831ZDkCL4qd-dRjo9u5UQIQ_mE1nuAHHEoOwyEVzKS4ozGd4uOqRbWM1u6ZYT1RnIbVVm4Eo0VnnxQZsSu_wsmcs17-6t0HLPYagGBEPYmhHazzkP-_S3YGst8RQL1_zeh0pC1vFGhdEgG4_E_WOf-_M49uVJ9agR7m-ksSdRJP039gZmC2jLvcZLkRMrHBSPnmP7YiFfEny9SLAoQNhx2I8g"
              />
              <p>Samantha Lee</p>
            </div>

            <p className={styles.cardTitle}>
              I will create a modern minimalist logo design
            </p>

            <p className={styles.cardDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus assumenda quibusdam illum eaque reprehenderit, maiores dolore provident, beatae tenetur, officiis animi excepturi! Tempore sint placeat debitis dolorum, itaque quasi nesciunt?</p>

            <div className={styles.cardRating}>
              <span>★</span>
              <strong>4.9</strong>
              <p>(245)</p>
            </div>
          </div>

          <footer className={styles.cardSearchFooter}>
            <button className={styles.favFooterBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </button>

            <button className={`${styles.favFooterBtn} ${styles.btnAdd}`}>Agregar</button>

            <p>
              From <span>$50</span>
            </p>
          </footer>
        </article>

        
      </div>
    </section>
  );
}
