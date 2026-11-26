import { useState, useId } from "react";

import styles from "./PricingCard.module.css";
import { useAuthStore } from "../../store/authStore.js";


export default function PricingCard({
  plans,
  onContinue,
  onContact
}) {
  const { isLoggedIn } = useAuthStore();
  const [selectedPlanId, setSelectedPlanId] = useState(plans[0]?.id);
  const tabsId = useId();

  const selectedPlan =
    plans.find((plan) => plan.id === selectedPlanId) ?? plans[0];

  if (!selectedPlan) return null;

  return (
    <aside className={styles.wrapper}>
      {/* Package tabs */}
      <div className={styles.tabs} role="tablist" aria-label="Pricing packages">
        {plans.map((plan) => {
          const isActive = selectedPlan.id === plan.id;

          return (
            <button
              key={plan.id}
              id={`${tabsId}-${plan.id}-tab`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${tabsId}-panel`}
              className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
              onClick={() => setSelectedPlanId(plan.id)}
            >
              {plan.name}
            </button>
          );
        })}
      </div>

      {/* Selected package */}
      <div
        className={styles.card}
        id={`${tabsId}-panel`}
        role="tabpanel"
        aria-labelledby={`${tabsId}-${selectedPlan.id}-tab`}
      >
        <div className={styles.header}>
          <h3>{selectedPlan.packageName}</h3>
          <p className={styles.price}>${selectedPlan.price}</p>
        </div>

        <p className={styles.description}>{selectedPlan.description}</p>

        {/* Delivery and revisions */}
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
              <path d="M16 3v4" />
              <path d="M8 3v4" />
              <path d="M4 11h16" />
              <path d="M15 19l2 2l4 -4" />
            </svg>
            <span>Entrega en {selectedPlan.deliveryDays} días</span>
          </div>

          <div className={styles.detailItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
              <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
            </svg>
            <span>
              {selectedPlan.revisions === -1
                ? "Unlimited Revisiones"
                : `${selectedPlan.revisions} Revisiones`}
            </span>
          </div>
        </div>

        {/* Features */}
        <ul className={styles.features}>
          {selectedPlan.features.map((feature) => (
            <li key={feature}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M9 12l2 2l4 -4" />
              </svg>

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            type="button"
            disabled={!isLoggedIn}
            className={styles.continueButton}
            onClick={() => onContinue?.(selectedPlan)}
          >
            {isLoggedIn
              ? `Continuar ($${selectedPlan.price})`
              : "Inicia sesión para continuar"}
          </button>

          {isLoggedIn && (
            <button
              type="button"
              className={styles.contactButton}
              onClick={onContact}
            >
              Contactar Freelancer
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
