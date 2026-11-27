import styles from "./FreelancerServiceCard.module.css";

export default function FreelancerServiceCard({
  title,
  description,
  image,
  price
}) {
  return (
    <article className={styles.serviceCard}>
      <img
        className={styles.serviceImage}
        src={image}
        alt={title}
      />

      <div className={styles.serviceContent}>
        <h3>{title}</h3>

        <p className={styles.description}>{description}</p>

        <p className={styles.price}>Desde {price}</p>
      </div>
    </article>
  );
}