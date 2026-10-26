/* Boton de prueba */
const searchServicesSection = document.querySelector(".search-services");

searchServicesSection?.addEventListener("click", (event) => {
  const element = event.target;

  if (element.classList.contains("btn-add")) {
    element.textContent = "¡Agregado!";
    element.disabled = true;
    element.classList.add("is-applied");
  }
});

