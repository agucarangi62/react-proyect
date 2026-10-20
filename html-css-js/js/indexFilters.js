// Filters
const filterDropdowns = document.querySelectorAll(".filter-dropdown");

const selectedFilters = {
  category: "",
  price: "",
  rating: "",
  sort: "",
};

filterDropdowns.forEach((dropdown) => {
  const button = dropdown.querySelector(".filter-btn");
  const menu = dropdown.querySelector(".dropdown-menu");
  const label = dropdown.querySelector("p");
  const options = menu.querySelectorAll("li");
  const initialLabel = label.textContent;

  const filterType = dropdown.dataset.filter;

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const value = option.dataset.value;

      selectedFilters[filterType] = value;
      
      filterServices();

      if(value === "") {
        label.textContent = initialLabel;
      } else {
        label.textContent = option.textContent;
      }
      
      menu.classList.remove("active");

      console.log(selectedFilters);
    });
  });

  button.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

});

document.addEventListener("click", (event) => {
  filterDropdowns.forEach((dropdown) => {
    if (!dropdown.contains(event.target)) {
      const menu = dropdown.querySelector(".dropdown-menu");
      menu.classList.remove("active");
    }
  });
});



// Services
function filterServices(){
  const services = document.querySelectorAll(".service-card");
  services.forEach((service) => {
    const category = service.dataset.category;
    const price = service.dataset.price;
    const rating = service.dataset.rating;
    const sort = service.dataset.sort;
  
    if(
      (selectedFilters.category === "" || selectedFilters.category === category) &&
      (selectedFilters.price === "" || Number(price) >= Number(selectedFilters.price)) &&
      (selectedFilters.rating === "" || Number(rating) >= Number(selectedFilters.rating)) &&
      (selectedFilters.sort === "" || selectedFilters.sort === sort)
    ) {
      service.classList.remove("is-hidden");
    } else {
      service.classList.add("is-hidden");
    }
  }) 
}


// Search input
const searchInput = document.querySelector("#index-search-input");

searchInput.addEventListener("input", () => {
  console.log(searchInput.value);
});

