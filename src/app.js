import { plans } from "./plans.js";

// Annual is the default billing period (issue #3).
let billing = "annual";

function priceLabel(plan) {
  const amount = billing === "annual" ? plan.priceAnnual : plan.priceMonthly;
  return `$${amount}`;
}

function billingNote(plan) {
  if (plan.priceMonthly === 0) return "free forever";
  return billing === "annual" ? `billed yearly ($${plan.priceAnnual * 12})` : "billed monthly";
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
    <p class="billing-note">${billingNote(plan)}</p>
    <button class="${cta.className}" data-cta="${plan.id}">${cta.label}</button>
    <ul>${plan.features.map((f) => `<li>${f}</li>`).join("")}</ul>
  `;
  return el;
}

function render() {
  const root = document.getElementById("plans");
  root.replaceChildren(...plans.map(renderPlan));
  document.querySelectorAll("[data-billing]").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.billing === billing));
  });
}

document.querySelectorAll("[data-billing]").forEach((b) => {
  b.addEventListener("click", () => { billing = b.dataset.billing; render(); });
});
render();
