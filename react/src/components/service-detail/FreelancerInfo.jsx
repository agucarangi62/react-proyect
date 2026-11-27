import styles from "./FreelancerInfo.module.css";
import { IconShare3, IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useFavoritesStore } from "../../store/favoritesStore";
import { useAuthStore } from "../../store/authStore";

export default function FreelancerInfo({ name, avatar, serviceId }) {
  const { isLoggedIn } = useAuthStore();
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const isFavorite = useFavoritesStore((state) => state.isFavorite(serviceId));

  return (
    <section className={styles.freelancerInfo}>
      <div className={styles.profile}>
        <img className={styles.avatar} src={avatar} alt={name} />

        <p className={styles.name}>{name}</p>
      </div>

      <div className={styles.actions}>
        <button
          className={styles.shareBtn}
          type="button"
          aria-label="Share service"
        >
          <IconShare3 size={21} stroke={1.75} />
        </button>

        {isLoggedIn && (
          <button
            type="button"
            className={`${styles.favBtn} ${isFavorite ? styles.favBtnActive : ""}`}
            onClick={() => toggleFavorite(serviceId)}
          >
            {isFavorite ? (
              <IconHeartFilled size={24} />
            ) : (
              <IconHeart size={24} stroke={2} />
            )}
          </button>
        )}
      </div>
    </section>
  );
}
