import { IconStar, IconStarFilled } from "@tabler/icons-react";

import styles from "./StarRating.module.css";

export default function StarRating({ rating }) {
  const normalizedRating = Math.min(5, Math.max(0, Number(rating) || 0));

  return (
    <div
      className={styles.stars}
      role="img"
      aria-label={`${normalizedRating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const fill = Math.min(Math.max(normalizedRating - index, 0), 1);

        if (fill === 1) {
          return (
            <IconStarFilled
              key={index}
              className={styles.starIcon}
              color="#eab308"
            />
          );
        }

        if (fill === 0) {
          return (
            <IconStar key={index} className={styles.starIcon} color="#cbd5e1" />
          );
        }

        return (
          <span key={index} className={styles.partialStar}>
            <IconStarFilled className={styles.starIcon} color="#cbd5e1" />

            <span
              className={styles.partialFill}
              style={{ width: `${fill * 100}%` }}
            >
              <IconStarFilled className={styles.starIcon} color="#eab308" />
            </span>
          </span>
        );
      })}
    </div>
  );
}
