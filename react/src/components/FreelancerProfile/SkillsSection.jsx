import styles from "./SkillsSection.module.css";

export default function SkillsSection({ skills }) {
  return (
    <section className={styles.skillsSection}>
      <h2>Habilidades</h2>

      <div className={styles.skillsList}>
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}