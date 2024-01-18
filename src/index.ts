/*
Add note on the use of console.log(); Do not use in production - synchronous operation!
Use Sentry.
*/

import express from "express";
import { EXPRESS_PORT } from "./config/environment.js";
import openidConnect from "express-openid-connect";
import { config } from "./config/index.js";
import { documentRoute } from "./routes/index.js";
import * as http from "http";

const { requiresAuth, auth } = openidConnect;

const app = express();
app.use(auth(config));

app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.use("/documents", documentRoute);

const server: http.Server = app.listen(EXPRESS_PORT, () => {
  console.log(`Server is running on http://localhost:${EXPRESS_PORT}`);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});

export { server };
