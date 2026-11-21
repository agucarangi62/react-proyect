import services from "../data/data.json";

export default function getServices() {
    return services;
}

export function getServiceById(id) {
  const services = getServices();

  return services.find((service) => service.id === id);
}