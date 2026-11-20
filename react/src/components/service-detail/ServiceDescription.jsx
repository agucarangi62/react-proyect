import styles from "./ServiceDescription.module.css";

export default function ServiceDescription({
  description,
  deliverables,
}) {
  return (
    <section className={styles.description}>

      <h2>Sobre este servicio</h2>
      <p className={styles.text}>
        {description}
      </p>

      <h3>Lo que obtendrás:</h3>
      <ul className={styles.deliverables}>
        {deliverables.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

    </section>
  );
}
