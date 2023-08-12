const production = process.env.NODE_ENV === "production";

export const SITE_URL = production
  ? "https://saas-place.vercel.app"
  : "http://localhost:3000";
