import {
  AUTH_ISSUER_BASE_URL,
  AUTH_CLIENT_ID,
  AUTH_BASE_URL,
  AUTH_SECRET,
} from "./environment";

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: AUTH_SECRET,
  baseURL: AUTH_BASE_URL,
  clientID: AUTH_CLIENT_ID,
  issuerBaseURL: AUTH_ISSUER_BASE_URL,
};

export { config };
