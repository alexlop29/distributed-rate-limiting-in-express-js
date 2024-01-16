import dotenv from "dotenv";
dotenv.config();

export const EXPRESS_PORT = process.env.EXPRESS_PORT;
export const AUTH_ISSUER_BASE_URL = process.env.AUTH_ISSUER_BASE_URL;
export const AUTH_CLIENT_ID = process.env.AUTH_CLIENT_ID ?? "";
export const AUTH_BASE_URL = process.env.AUTH_BASE_URL ?? "";
export const AUTH_SECRET = process.env.AUTH_SECRET;
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
export const AWS_SESSION_TOKEN = process.env.AWS_SESSION_TOKEN;
export const LAUNCH_DARKLY_SDK_KEY = process.env.LAUNCH_DARKLY_SDK_KEY ?? "";
export const REDIS_URL = process.env.REDIS_URL ?? "";
