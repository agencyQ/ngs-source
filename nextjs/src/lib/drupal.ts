import { DrupalClient } from "next-drupal";

const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL;
const clientId = process.env.DRUPAL_CLIENT_ID;
const clientSecret = process.env.DRUPAL_CLIENT_SECRET;

if (!baseUrl) {
  throw new Error("NEXT_PUBLIC_DRUPAL_BASE_URL is not set");
}
if (!clientId || !clientSecret) {
  throw new Error("DRUPAL_CLIENT_ID and DRUPAL_CLIENT_SECRET must be set");
}

export const drupal = new DrupalClient(baseUrl, {
  auth: {
    clientId,
    clientSecret,
  },
});
