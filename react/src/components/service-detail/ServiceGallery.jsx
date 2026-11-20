import { useState } from "react";

import styles from "./ServiceGallery.module.css";

export default function ServiceGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className={styles.gallery}>

      {/* Main image */}
      <div className={styles.mainImageContainer}>
        <img
          className={styles.mainImage}
          src={selectedImage.src}
          alt={selectedImage.alt}
        />
      </div>

      {/* Thumbnails */}
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={`${styles.thumbnail} ${
              selectedImage.id === image.id
                ? styles.thumbnailActive
                : ""
            }`}
            onClick={() => setSelectedImage(image)}
            aria-label={`Show image ${index + 1}`}
            aria-pressed={selectedImage.id === image.id}
          >
            <img src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>

    </section>
  );
}
