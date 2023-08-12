const production = process.env.NODE_ENV === "production";

export const SITE_URL = production
  ? "https://saas-place-njrm.vercel.app"
  : "http://localhost:3000";
