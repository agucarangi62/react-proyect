import styles from "./FreelancerServices.module.css";
import FreelancerServiceCard from "./FreelancerServiceCard.jsx";

export default function FreelancerServices({ services }) {
  return (
    <section className={styles.servicesSection}>
      <h2>Servicios publicados</h2>

      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <FreelancerServiceCard
            key={service.id}
            {...service}
          />
        ))}
      </div>
    </section>
  );
}