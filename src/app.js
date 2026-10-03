import { plans } from "./plans.js";

function priceLabel(plan) {
  if (plan.priceMonthly === 0) return "$0";
  return `$${plan.priceMonthly}`;
}

function ctaFor(plan) {
  if (plan.id === "free") return { label: "Get started", className: "btn btn-ghost" };
  if (plan.featured) return { label: "Upgrade to Pro", className: "btn btn-primary" };
  return { label: "Contact sales", className: "btn btn-ghost" };
}

function renderPlan(plan) {
  const cta = ctaFor(plan);
  const el = document.createElement("article");
  el.className = "plan" + (plan.featured ? " plan-featured" : "");
  el.dataset.plan = plan.id;
  el.innerHTML = `
    ${plan.featured ? '<div class="ribbon">Most popular</div>' : ""}
    <h2>${plan.name}</h2>
    <p class="tagline">${plan.tagline}</p>
    <div class="price"><span class="amount">${priceLabel(plan)}</span><span class="per">/mo</span></div>
    <button class="${cta.className}" data-cta="${plan.id}">${cta.label}</button>
    <ul>${plan.features.map((f) => `<li>${f}</li>`).join("")}</ul>
  `;
  return el;
}

const root = document.getElementById("plans");
plans.forEach((plan) => root.appendChild(renderPlan(plan)));
