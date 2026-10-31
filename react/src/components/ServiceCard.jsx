

export default function ServiceCard({
  title,
  freelancer,
  description,
  image,
  avatar,
  data,
}) {
  return (
    <article
      className="service-card"
      data-category={data.category}
      data-price={data.price}
      data-rating={data.rating}
      data-sort={data.sort}
    >
      <header className="card-header">
        <div className="card-image">
          <img src={image} alt="" />
        </div>

        <button className="fav-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        </button>
      </header>
      <div className="card-body">
        <p className="card-title">{title}</p>
        <p className="card-description">{description}</p>
        <div className="card-author">
          <img
            alt={`${freelancer}'s profile picture`}
            className="w-6 h-6 rounded-full"
            src={avatar}
          />
          <p>
            {freelancer} <span>★ {data.rating}</span>
          </p>
        </div>
      </div>
      <footer className="card-footer">
        <p>
          Desde <span>${data.price}</span>
        </p>
      </footer>
    </article>
  );
}
