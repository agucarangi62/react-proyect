import styles from "./ProfileHeader.module.css";
import { IconMapPin, IconStarFilled } from "@tabler/icons-react";

export default function ProfileHeader({
  avatar,
  name,
  profession,
  location,
  rating,
  reviewCount,
  onContact
}) {
  return (
    <section className={styles.profileHeader}>
      <div className={styles.profileInfo}>
        <img
          className={styles.avatar}
          src={avatar}
          alt={`Foto de perfil de ${name}`}
        />

        <div className={styles.profileDetails}>
          <h1>{name}</h1>

          <p className={styles.profession}>{profession}</p>

          <p className={styles.location}>
            <IconMapPin size={17} stroke={1.8} />
            {location}
          </p>

          <div className={styles.rating}>
            <IconStarFilled size={17} />

            <span className={styles.ratingValue}>{rating}</span>

            <span className={styles.reviewCount}>
              ({reviewCount} reseñas)
            </span>
          </div>
        </div>
      </div>

      <button
        className={styles.contactButton}
        type="button"
        onClick={onContact}
      >
        Contactar
      </button>
    </section>
  );
}