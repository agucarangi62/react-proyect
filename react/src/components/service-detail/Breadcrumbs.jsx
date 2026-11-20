import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs({ items }) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span className={styles.item} key={`${item.label}-${index}`}>

          {index > 0 && <span aria-hidden="true">/</span>}

          {item.href ? (
            <a href={item.href}>{item.label}</a>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}

        </span>
      ))}
    </nav>
  );
}
