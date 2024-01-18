import express from "express";
import { EXPRESS_PORT } from "./config/environment.js";
import openidConnect from "express-openid-connect";
import { config } from "./config/index.js";
import { documentRoute } from "./routes/index.js";

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

app.listen(EXPRESS_PORT, () => {
  console.log(`Server is running on http://localhost:${EXPRESS_PORT}`);
});

export { app };

// process.on("SIGTERM", () => {
//   console.log("SIGTERM signal received: closing HTTP server");
//   server.close(() => {
//     console.log("HTTP server closed");
//   });
//   client.disconnect();
// });
