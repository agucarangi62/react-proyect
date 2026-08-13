// Filters aside
const filterButton = document.querySelector(".filter-toggle");
const filters = document.querySelector(".filters-aside");
const overlay = document.querySelector(".filters-overlay");
const closeButton = document.querySelector(".filters-close");

if (filterButton && filters && overlay && closeButton) {

    filterButton.addEventListener("click", () => {
        filters.classList.add("open");
        overlay.classList.add("open");
    });

    closeButton.addEventListener("click", closeFilters);
    overlay.addEventListener("click", closeFilters);

    function closeFilters() {
        filters.classList.remove("open");
        overlay.classList.remove("open");
    }
}

// Mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const menuClose = document.querySelector(".menu-close");

if (menuToggle && mobileMenu && menuOverlay && menuClose) {

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.add("open");
        menuOverlay.classList.add("open");
    });

    menuClose.addEventListener("click", closeMenu);
    menuOverlay.addEventListener("click", closeMenu);

    function closeMenu() {
        mobileMenu.classList.remove("open");
        menuOverlay.classList.remove("open");
    }
}