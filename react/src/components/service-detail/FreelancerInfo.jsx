import { IconShare3, IconHeart } from "@tabler/icons-react";

import styles from "./FreelancerInfo.module.css";

export default function FreelancerInfo({ name, avatar, onShare, onFavorite }) {
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
        onClick={onShare}>
          <IconShare3 size={21} stroke={1.75} />
        </button>

        <button
          className={styles.favBtn}
          type="button"
          aria-label="Add to favorites"
          onClick={onFavorite}
        >
          <IconHeart size={21} stroke={1.75} />
        </button>
      </div>
    </section>
  );
}
