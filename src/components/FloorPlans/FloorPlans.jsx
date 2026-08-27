import { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';
import { floorPlans } from '../../data/residences';
import FloorPlanViewer from './FloorPlanViewer';

export default function FloorPlans() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const innerRef = useReveal();

  return (
    <section className="floor-plans" id="floor-plans">
      <div className="floor-plans__inner reveal" ref={innerRef}>
        <span className="floor-plans__eyebrow">Plans</span>
        <h2 className="floor-plans__title">
          Space, considered<br /> from every angle.
        </h2>
        <div className="floor-plans__grid">
          {floorPlans.map((plan) => (
            <button
              key={plan.id}
              className="floor-plan-card"
              onClick={() => setSelectedPlan(plan)}
              aria-label={`View ${plan.name} floor plan`}
            >
              <div className="floor-plan-card__image-wrap">
                <img
                  src={plan.image}
                  alt={plan.alt}
                  className="floor-plan-card__image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="floor-plan-card__info">
                <h3 className="floor-plan-card__name">{plan.name}</h3>
                <p className="floor-plan-card__size">{plan.size}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <FloorPlanViewer plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
    </section>
  );
}
