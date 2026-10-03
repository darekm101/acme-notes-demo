// Plan catalogue shown on the pricing page.
export const plans = [
  {
    id: "free",
    name: "Free",
    tagline: "For personal notes",
    priceMonthly: 0,
    features: ["Unlimited notes", "2 devices", "Basic search"],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For people who live in their notes",
    priceMonthly: 24,
    featured: true,
    features: ["Everything in Free", "Unlimited devices", "AI search", "Version history"],
  },
  {
    id: "team",
    name: "Team",
    tagline: "For teams that share a brain",
    priceMonthly: 48,
    features: ["Everything in Pro", "Shared spaces", "Admin controls", "SSO"],
  },
];
