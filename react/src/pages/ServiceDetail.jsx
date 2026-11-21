import styles from "./ServiceDetail.module.css";

import Breadcrumbs from "../components/service-detail/Breadcrumbs.jsx";
import FreelancerInfo from "../components/service-detail/FreelancerInfo.jsx";
import ServiceGallery from "../components/service-detail/ServiceGallery.jsx";
import ServiceDescription from "../components/service-detail/ServiceDescription.jsx";
import PricingCard from "../components/service-detail/PricingCard.jsx";
import Reviews from "../components/service-detail/Reviews.jsx";
import StarRating from "../components/service-detail/StarRating.jsx";
import { getServiceById } from "../services/serviceService.js";
import { useParams } from "react-router";

// export function ServiceDetail() {
// const { serviceId } = useParams();
// const navigate = useNavigate();

// const [service, setService] = useState(null);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);

// (useEffect(() => {
//   fetch(`https://jscamp-api.vercel.app/api/jobs/${serviceId}`)
//     .then((response) => {
//       if (!response.ok) throw new Error("Error al obtener el servicio");
//       return response.json();
//     })
//     .then((json) => {
//       setService(json.data);
//     })
//     .catch((error) => {
//       setError(error);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// }),
//   [serviceId]);

// if (loading) {
//   return <h1>Loading...</h1>;
// }

// if (error || !service) {
//   return (
//     <>
//       <h1>{error.message}</h1>
//       <button onClick={() => navigate("/")}>Volver</button>
//     </>
//   );
// }

export function ServiceDetail() {
  const { serviceId } = useParams(); // Obtener el ID del servicio desde los parámetros de la URL
  const service = getServiceById(serviceId); // Obtener el servicio por ID
  if(!serviceId){
    return <main className="container">Servicio no encontrado.</main>;
  }

  const categoryLabels = {
    design: "Diseño gráfico",
    technology: "Tecnología",
    marketing: "Marketing",
  };

  const breadcrumbs = [
    {
      label: "Servicios",
      href: "/search",
    },
    {
      label: categoryLabels[service.data.category] ?? "Servicios",
      href: `/search?category=${service.data.category}`,
    },
    {
      label: service.title,
    },
  ];

  const freelancer = {
    name: service.freelancer,
    avatar: service.avatar,
  };

  const serviceDescription = {
    description: service.details.description,
    deliverables: service.details.deliverables,
  };

  const reviewsData = {
    totalReviews: service.data.ratingCount,
    averageRating: service.data.rating,
    reviews: service.details.reviews,
  };

  return (
    <main className={`${styles.page} container`}>
      <Breadcrumbs items={breadcrumbs} />

      <header className={styles.heading}>
        <h1>{service.title}</h1>

        <div className={styles.serviceRating}>
          <StarRating rating={service.data.rating} />
          <strong>{service.data.rating.toFixed(1)}</strong>
          <span>({service.data.ratingCount} reviews)</span>
        </div>
      </header>

      <FreelancerInfo {...freelancer} />

      <div className={styles.layout}>
        <div className={styles.mainContent}>
          <ServiceGallery images={service.details.images} />

          <ServiceDescription {...serviceDescription} />
        </div>

        <PricingCard plans={service.details.pricingPlans} />
      </div>

      <Reviews {...reviewsData} />
    </main>
  );
}
