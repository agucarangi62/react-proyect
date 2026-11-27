import styles from "./RatingSummary.module.css";
import { IconStarFilled } from "@tabler/icons-react";

export default function RatingSummary({
  rating,
  reviewCount,
  distribution,
}) {
  return (
    <div className={styles.ratingSummary}>
      <div className={styles.ratingStats}>
        <p className={styles.ratingValue}>{rating}</p>

        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((star) => (
            <IconStarFilled key={star} size={19} />
          ))}
        </div>

        <p className={styles.reviewCount}>
          {reviewCount} reseñas
        </p>
      </div>

      <div className={styles.ratingDistribution}>
        {distribution.map((item) => (
          <div className={styles.ratingRow} key={item.stars}>
            <span>{item.stars}</span>

            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${item.percentage}%` }}
              />
            </div>

            <span className={styles.percentage}>
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}