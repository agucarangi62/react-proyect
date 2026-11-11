import styles from "./ServiceCard.module.css";

export default function ServiceCard({
  title,
  freelancer,
  description,
  image,
  avatar,
  data,
}) {
  return (
    <article
      className={styles.serviceCard}
      data-category={data.category}
      data-price={data.price}
      data-rating={data.rating}
      data-sort={data.sort}
    >
      <header className={styles.cardHeader}>
        <div className={styles.cardImage}>
          <img src={image} alt="" />
        </div>
      </header>
      <div className={styles.cardBody}>
        <div className={styles.cardAuthor}>
          <img
            alt={`${freelancer}'s profile picture`}
            className="w-6 h-6 rounded-full"
            src={avatar}
          />
          <p>{freelancer}</p>
        </div>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardRating}>
          <p>
            <span>
              ★ <strong>{data.rating}</strong>
            </span>{" "}
            ({data.ratingCount})
          </p>
        </div>
      </div>
      <footer className={styles.cardFooter}>
        <button className={styles.favBtn}>
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
        <p>
          Desde <span>${data.price}</span>
        </p>
      </footer>
    </article>
  );
}
