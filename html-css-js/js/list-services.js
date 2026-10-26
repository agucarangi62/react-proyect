// Listado de servicios
const container = document.querySelector(".services");
// Fetch
fetch("./data.json")
  .then((res) => {
    return res.json();
  })
  .then((services) => {
    services.forEach((service) => {
      const serviceCard = document.createElement("article");
      serviceCard.classList.add("service-card");
      serviceCard.dataset.category = service.data.category;
      serviceCard.dataset.price = service.data.price;
      serviceCard.dataset.rating = service.data.rating;
      serviceCard.dataset.sort = service.data.sort;

      serviceCard.innerHTML = `<header class="card-header">
                <div class="card-image">
                  <img
                    src="${service.image}"
                    alt=""
                  />
                </div>
                <button class="fav-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                    />
                  </svg>
                </button>
              </header>
              <div class="card-body">
                <p class="card-title">${service.title}</p>
                <p class="card-description">${service.description}</p>
                <div class="card-author">
                  <img
                    alt="${service.freelancer}'s profile picture"
                    class="w-6 h-6 rounded-full"
                    src="${service.avatar}"
                  />
                  <p>${service.freelancer} <span>★ ${service.data.rating}</span></p>
                </div>
              </div>
              <footer class="card-footer">
                <p>Desde <span>$${service.data.price}</span></p>
              </footer>
            `;

      container.appendChild(serviceCard);
    });
  });
