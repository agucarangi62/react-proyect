import styles from "./ServiceDetail.module.css";

import Breadcrumbs from "../components/service-detail/Breadcrumbs.jsx";
import FreelancerInfo from "../components/service-detail/FreelancerInfo.jsx";
import ServiceGallery from "../components/service-detail/ServiceGallery.jsx";
import ServiceDescription from "../components/service-detail/ServiceDescription.jsx";
import PricingCard from "../components/service-detail/PricingCard.jsx";
import Reviews from "../components/service-detail/Reviews.jsx";
import StarRating from "../components/service-detail/StarRating.jsx";

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
  const service = {
    title: "Diseñaré un logotipo minimalista y moderno para tu negocio.",
    data: {
      rating: 4.9,
      ratingCount: 212,
    },
  };
  const breadcrumbs = [
    { label: "Servicios", href: "/search" },
    { label: "Graphics & Design", href: "#" },
    { label: "Diseñador Gráfico Freelance" },
  ];
  const freelancer = {
    name: "Jorge Gonzalez",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 4.8,
    reviewsCount: 25,
  };

  const serviceImages = [
    {
      id: "main",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1Ed01h7oXi331mU_WMTj4YfW7jer6J4CAjTDqOyu0LMBEfut_VYn5GE7lCuTsEOsj5ym7k70wyGOkKorqAKEqpu-oyUbzCXUnYMtGXm5CS1jE54ysKA2ZBFv2w7kqIqknXhLVj8HbHHgd5FWjGLrVCcIl5qZUokvoVoj3VkAOt_M0LO52uwB9VTTDC0G1bBsMOXtYpFov-ygVJB1oZvKHbdhw2jynqiAKlQ14sc8XaG4Is6uRNrXfxm-qbM4gFVCziVPzXGGCPw",
      alt: "Modern minimalist logo design displayed on a business card",
    },
    {
      id: "image-2",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAHXSjGxcu1wvc0rinkjmnpxzdNhpVIuJoxRRFykfq11gBbBWhHvukwlBNA-vmiY0Z1_4YnWiKjlxwi7-doWihITY8050pZ6UkjTWdReH7bc-12az3ITcDr3OyjU1IjbOtzfDUclX5jnMTrEVxKVB2Mt_6EvbWyZglSl3ZvvfQcdW5sLWCrFQZJzlGJwOanrp--ZEXOqbwxqtjDIS6jByLbVMpsFg61vUWX2QoQlL6AeG-BYQdhyHc3MfuywmztoKHxkkPUZBVMQ",
      alt: "Logo design example 2",
    },
    {
      id: "image-3",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd-kKVD8lgMlQ6CJj-9Y-LJknt5png8W-XMBIHfCTFxAd8TIWvGiTb3sSgm0rrrVzOtsV0YTvFpMSeXZldjHToFKXk25OCeEUjOuObSKSlHV1O--YzkbtAuTcfZRclwzoSEAUj2EQ-_MWq2DBAXtA9POla9SnEIpuYhgLqGViiOlad169lNRecqe3o8WVxndM9xwR8mu2jFePlnWovU7eLS-EyroxW45OyX5K2MyZ9NRHBnunklalUJ0M8D9Vuy3cKQWKuGK4Zyg",
      alt: "Logo design example 3",
    },
    {
      id: "image-4",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX8yUyoqQa4mce2_y7zjzqFdszUwfA91uKnHkDZg4cLZY91lBAk-f7gnLwRLa-S3n404DTwWsL09o7BRz_zdgZmWov6uRKm59w1lv2MfiNwTN5N7AntWS8Az0QFfhPqGmTy7uvsVxLkKPBcEgrh51O7gj_pzPUJMVmbjKK8X8FyBX5VS__0JTNHJ2MRU3LeRzUmMhWOaxNw4T1CZ1tneSqyZB2P8t_upuqh6EFBqIe1Og9vHQCYYbgTylRxpFMJqrHqRxfmb55Ow",
      alt: "Logo design example 4",
    },
    {
      id: "image-5",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZuJbQ1_jwF_ojGN7BoNV0QEggmnRCdPiHPQ-Mx8D7YID9Ig8C_vO5-S8HXTQCyITqFgPW77OUJX5jPyvIILjEftHLfPJI6osFkVNTGDnr_mSewmaAxTam-OmcuEisCawaWR8J_mmpgx6WEBu7lFw7W5putDdgRZ0d57bwaGGKZsVse3QQB3N3-1m9QrXOPsgonrxBqaQzm70QAaLri2Pm2tjjDpi5FEiYqtHDHo6elKFMbk9IqUMkO50u2s6VttUufffL4RYKaQ",
      alt: "Logo design example 5",
    },
  ];

  const serviceDescription = {
    description:
      "¡Te doy la bienvenida a mi servicio de diseño de logotipos minimalistas y modernos! Si buscas un logotipo limpio, atemporal y profesional para tu marca, has llegado al lugar indicado. Me especializo en crear diseños impactantes que conectan con tu público objetivo y potencian la identidad de tu marca.",

    deliverables: [
      "Conceptos de logotipo únicos y profesionales.",
      "Archivos JPG de alta resolución y PNG con fondo transparente.",
      "Archivos fuente vectoriales (AI, EPS, PDF).",
      "Revisiones ilimitadas hasta que quedes 100 % satisfecho.",
      "Comunicación amable y tiempos de respuesta rápidos.",
    ],
  };

  const pricingPlans = [
    {
      id: "basic",
      name: "Basic",
      packageName: "Starter Package",
      price: 150,
      description:
        "2 initial logo concepts in high resolution with source files.",
      deliveryDays: 3,
      revisions: 2,
      features: ["2 concepts included", "Logo transparency", "Vector file"],
    },
    {
      id: "standard",
      name: "Standard",
      packageName: "Professional Package",
      price: 250,
      description: "A complete logo design package for your business.",
      deliveryDays: 5,
      revisions: 5,
      features: [
        "3 logo concepts",
        "High-resolution files",
        "Source files included",
        "Commercial usage",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      packageName: "Complete Brand Package",
      price: 400,
      description: "A complete branding experience for your business.",
      deliveryDays: 7,
      revisions: -1,
      features: [
        "5 logo concepts",
        "All source files",
        "Brand guidelines",
        "Social media assets",
        "Unlimited revisions",
      ],
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah K.",
      country: "United States",
      rating: 5,
      date: "2 weeks ago",
      avatar: "https://randomuser.me/api/portraits/women/71.jpg",
      comment:
        "Alex was incredible to work with. He understood the vision perfectly and delivered a logo that exceeded all my expectations. The process was smooth and communication was excellent. Highly recommended!",
    },
    {
      id: 2,
      name: "Mike L.",
      country: "Canada",
      rating: 5,
      date: "1 month ago",
      avatar: "https://randomuser.me/api/portraits/men/71.jpg",
      comment:
        "A true professional. The quality of the work is top-notch and Alex is a pleasure to collaborate with. Will definitely be back for future projects.",
    },
    {
      id: 3,
      name: "Emma R.",
      country: "United Kingdom",
      rating: 4.5,
      date: "2 months ago",
      avatar: "https://randomuser.me/api/portraits/women/72.jpg",
      comment:
        "Excellent communication and a beautiful final design. The whole process was very professional.",
    },
    {
      id: 4,
      name: "James W.",
      country: "Australia",
      rating: 5,
      date: "3 months ago",
      avatar: "https://randomuser.me/api/portraits/men/74.jpg",
      comment:
        "Very happy with the result. Alex paid attention to every detail and delivered everything on time.",
    },
  ];

  const reviewsData = {
    totalReviews: 212,
    averageRating: 4.8,
    reviews,
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
          <ServiceGallery images={serviceImages} />

          <ServiceDescription {...serviceDescription} />
        </div>

        <PricingCard plans={pricingPlans} />
      </div>

      <Reviews {...reviewsData} />
    </main>
  );
}
