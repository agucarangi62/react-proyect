import { useState } from "react";
import StarRating from "./StarRating.jsx";

import styles from "./Reviews.module.css";

export default function Reviews({ reviews, totalReviews, averageRating }) {
  const [showAll, setShowAll] = useState(false);

  const visibleReviews = showAll ? reviews : reviews.slice(0, 2);

  return (
    <section className={styles.reviews}>
      <h2>Reviews</h2>

      {/* Review summary */}
      <div className={styles.summary}>
        <p>{totalReviews} Reviews</p>

        <StarRating rating={averageRating} />

        <strong>{averageRating}</strong>
      </div>

      {/* Reviews list */}
      <div className={styles.list}>
        {visibleReviews.map((review) => (
          <article className={styles.reviewCard} key={review.id}>
            <img
              className={styles.avatar}
              src={review.avatar}
              alt={`${review.name}'s avatar`}
            />

            <div className={styles.content}>
              <div className={styles.header}>
                <div className={styles.author}>
                  <p>{review.name}</p>
                  <span>{review.country}</span>
                </div>

                <div className={styles.metadata}>
                  <StarRating rating={review.rating} />
                  <span>{review.date}</span>
                </div>
              </div>

              <p className={styles.text}>{review.comment}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Show more / less */}
      {reviews.length > 2 && (
        <button
          type="button"
          className={styles.showMore}
          onClick={() => setShowAll((previous) => !previous)}
          aria-expanded={showAll}
        >
          {showAll ? "Mostrar menos Reviews" : "Mostrar mas Reviews"}
        </button>
      )}
    </section>
  );
}
