// Plan catalogue shown on the pricing page.
// priceAnnual is the per-month price when billed yearly (two months free).
export const plans = [
  {
    id: "free",
    name: "Free",
    tagline: "For personal notes",
    priceMonthly: 0,
    priceAnnual: 0,
    features: ["Unlimited notes", "2 devices", "Basic search"],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For people who live in their notes",
    priceMonthly: 24,
    priceAnnual: 20,
    featured: true,
    features: ["Everything in Free", "Unlimited devices", "AI search", "Version history"],
  },
  {
    id: "team",
    name: "Team",
    tagline: "For teams that share a brain",
    priceMonthly: 48,
    priceAnnual: 40,
    features: ["Everything in Pro", "Shared spaces", "Admin controls", "SSO"],
  },
];
