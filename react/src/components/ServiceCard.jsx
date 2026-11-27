import styles from "./ServiceCard.module.css";
import { Link } from "../components/Link.jsx";
import { useAuthStore } from "../store/authStore.js";
import { useFavoritesStore } from "../store/favoritesStore.js";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";

export default function ServiceCard({
  id,
  title,
  freelancer,
  description,
  image,
  avatar,
  data,
}) {
  const { isLoggedIn } = useAuthStore();
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const isFavorite = useFavoritesStore((state) => state.isFavorite(id));

  return (
    <article
      className={styles.serviceCard}
      data-category={data.category}
      data-price={data.price}
      data-rating={data.rating}
      data-sort={data.sort}
    >
      <header className={styles.cardHeader}>
        <Link href={`/service/${id}`}>
          <div className={styles.cardImage}>
            <img src={image} alt="" />
          </div>
        </Link>
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
        <Link href={`/service/${id}`} className={styles.title}>
          <p className={styles.cardTitle}>{title}</p>
        </Link>
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
        {isLoggedIn && (
          <button
            type="button"
            className={`${styles.favBtn} ${isFavorite ? styles.favBtnActive : ""}`}
            onClick={() => toggleFavorite(id)}
          >
            {isFavorite ? (
              <IconHeartFilled size={24} />
            ) : (
              <IconHeart size={24} stroke={2} />
            )}
          </button>
        )}
        <Link href={`/service/${id}`} className={styles.details}>
          Ver detalles
        </Link>
        <p>
          Desde <span>${data.price}</span>
        </p>
      </footer>
    </article>
  );
}
