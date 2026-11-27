import styles from "./ReviewsSection.module.css";
import RatingSummary from "./RatingSummary.jsx";

export default function ReviewsSection({
  rating,
  reviewCount,
  distribution,
}) {
  return (
    <section className={styles.reviewsSection}>
      <h2>Reseñas y valoraciones</h2>

      <RatingSummary
        rating={rating}
        reviewCount={reviewCount}
        distribution={distribution}
      />
    </section>
  );
}