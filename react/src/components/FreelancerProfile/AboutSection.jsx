import styles from "./AboutSection.module.css";
import { IconChevronDown } from "@tabler/icons-react";

export default function AboutSection({ name, description }) {
  return (
    <section className={styles.aboutSection}>
      <details open>
        <summary>
          <h2>Sobre {name}</h2>

          <IconChevronDown className={styles.chevron} size={22} />
        </summary>

        <p>{description}</p>
      </details>
    </section>
  );
}