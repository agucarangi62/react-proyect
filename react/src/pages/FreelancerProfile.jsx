import styles from "./FreelancerProfile.module.css";

import ProfileHeader from "../components/FreelancerProfile/ProfileHeader.jsx";
import FreelancerServices from "../components/FreelancerProfile/FreelancerServices.jsx";
import ReviewsSection from "../components/FreelancerProfile/ReviewsSection.jsx";
import AboutSection from "../components/FreelancerProfile/AboutSection.jsx";
import SkillsSection from "../components/FreelancerProfile/SkillsSection.jsx";

import { useState } from "react";

const freelancer = {
  name: "Jane Doe",
  profession: "Diseñadora UX/UI Senior",
  location: "Córdoba, Argentina",
  rating: 4.9,
  reviewCount: 120,
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDHAjQjdhEkmtW4d5eGFv8kjw7ZzVUMHTo_cEbijlRWhHo--8cvc0nk0W3eTWL8cQfib4oUjmhvYDc4tupyFjp-0_Uqv-tY7BbGT9UrrH2JZcAcG0sIsGky9_GAEw0gCfPJGOTMdAoK2tX7igXhCsnu2NatlelF37Co-zqHaVoUzM7Q9JvvTCuh3BP6EvAoiQmvVUcDYsOrmlYHO3KtsUzoySebqwHDxKRzaiLQohWWaqAPP3MsH7uHP-480ZVkZo7Z6fhbWVWZrg",

  description:
    "Soy una diseñadora UX/UI especializada en crear experiencias digitales intuitivas y atractivas. Tengo experiencia trabajando con marcas y empresas para transformar sus ideas en productos digitales funcionales y visualmente atractivos.",

  skills: [
    "Diseño UI/UX",
    "Figma",
    "Prototipado",
    "Webflow",
    "Investigación UX",
    "Design Systems",
  ],
};

const services = [
  {
    id: 1,
    title: "Diseño de logos e identidad visual",
    description:
      "Creación de identidades visuales únicas que representan la historia de tu marca.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfaegv1DSL_rOm5gRoUkH5Fp__dRcq73e10VKwpOO71ofFVRtfkGnpTr-St-JtVmH6iJ44bHK8gbQOElPcw-Ta6FbLvCrTEqlNyIjLjPFazFV1PWt-r7bArwqFEnb-a63yW__QELMGDhWrP4-4s_D5_8k0QsseR8IuF55xIXNqVDdw3Y7SLRLJRRrj5BLh6uUOSJqunlu_FObHxL7D8g3li2QZKWScNIjCo9BRVOD8v7y8PE3szsHekE7PwAN-P6573W29w77UNg",
    price: "$500",
  },
  {
    id: 2,
    title: "Diseño de aplicaciones web y móviles",
    description:
      "Interfaces intuitivas y atractivas para plataformas web y dispositivos móviles.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEE-4GI3lZAtVtE_BYgwPcD9u7A_XpY9i02FA4cYw9Y6hKaxaKvuv6Wmk2G0URvQbu8d4yrVkvqYAWaj8ATVqGr8M6qdOUwFBqGqDR338zzQCD7gT4NDevtP3fi4wIDNpjVX-usQWubImkkAI3kheL7vrO-TuZPS7dcLauh32NCy5rBf3FRrpImTKJsURcq07h5EqE-8mI4DsnNdszZkbSFaPRPeDQ2h3DiRL0nylgqPtLhf9FVNLbBIycXyCRHOizMqgYmy_JSw",
    price: "$1200",
  },
  {
    id: 3,
    title: "Prototipos interactivos",
    description:
      "Transformo tus ideas en prototipos interactivos para visualizar tus proyectos.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-a9zrEqAcV_8G1H6JBu4h5hznvcmP4TOZKyi7-cfvVX760P6VDriquyccyaE8tTzvEx449RzkPb0buV-gm8ma_0fcWIuMxt_uNMG9z0jjn-6kUm1CPClQuUATxL6vw09nDPSMjC5BOhOvkokVuhh2bcEWldVZlDSwYMNfJsZkDiDupE5oAuzZ-_PnKlI4Ox3BUy85M1xL0SlIUXEXjUTl2SNW1vKuFf0Kp60Lb80Txy4Q4Q16_1bMfi521eOR83WyQD5aB18YLw",
    price: "$800",
  },
  {
    id: 4,
    title: "Consultoría de diseño UX",
    description:
      "Asesoramiento profesional para mejorar la experiencia de usuario de tu producto.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFG9obLT4pJDltoxHoj0v-HzB8HFuVysw40wModNnfLqGvuHeJo3C-bklRQC7sV698fK2NhbBud8sMX8WKFj_oipsU-JUCUD8TO3cxnMckmnF9nls0ZdyGNcqpMr5ZysVAL7irghsn8ngucJfA-Qlxtk1A8K6htUe9bzd5ifqWX9YRWNwq5Gf4fNTzpRsHQkEGTjFbbULpzqQOm5HquFBbHykQvv5ByrONCaty_qHjru39O-4Cx-Sm11mOd77_6zC52dMomCh0_w",
    price: "$150/hora",
  },
];

const reviewDistribution = [
  { stars: 5, percentage: 85 },
  { stars: 4, percentage: 10 },
  { stars: 3, percentage: 3 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 1 },
];

export default function FreelancerProfile() {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <main className={styles.freelancerProfile}>
      <div className={styles.container}>
        <ProfileHeader {...freelancer} />

        <div className={styles.profileLayout}>
          <div className={styles.mainContent}>
            {/* Pestañas */}
            <div
              className={styles.profileTabs}
              role="tablist"
              aria-label="Contenido del perfil"
            >
              <button
                id="services-tab"
                type="button"
                role="tab"
                aria-selected={activeTab === "services"}
                aria-controls="profile-tab-panel"
                className={`${styles.tab} ${
                  activeTab === "services" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("services")}
              >
                Servicios
              </button>

              <button
                id="reviews-tab"
                type="button"
                role="tab"
                aria-selected={activeTab === "reviews"}
                aria-controls="profile-tab-panel"
                className={`${styles.tab} ${
                  activeTab === "reviews" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reseñas
              </button>
            </div>

            {/* Contenido de las pestañas */}
            <div
              id="profile-tab-panel"
              role="tabpanel"
              aria-labelledby={`${activeTab}-tab`}
              className={styles.tabPanel}
              tabIndex={0}
            >
              {activeTab === "services" ? (
                <FreelancerServices services={services} />
              ) : (
                <ReviewsSection
                  rating={freelancer.rating}
                  reviewCount={freelancer.reviewCount}
                  distribution={reviewDistribution}
                />
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <AboutSection
              name={freelancer.name}
              description={freelancer.description}
            />

            <SkillsSection skills={freelancer.skills} />
          </aside>
        </div>
      </div>
    </main>
  );
}
