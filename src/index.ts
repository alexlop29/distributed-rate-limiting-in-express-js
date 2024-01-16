import express from "express";
import { EXPRESS_PORT } from "./config/environment";
import { auth, requiresAuth } from "express-openid-connect";
import { config } from "./config/auth";
import { documentRoute } from "./routes/document";
import { client } from "./config/redis";
import * as http from "http";

const app = express();
app.use(auth(config));

app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.use("/documents", documentRoute);

let server: http.Server

const start = async () => {
  try {
      client.on("error", (error) => console.error(`Redis Error: ${error}`));
      await client.connect()
      server = app.listen(EXPRESS_PORT, () => {
        console.log(`Server is running on http://localhost:${EXPRESS_PORT}`);
      });
  } catch (error) {
      console.log(error)
  }
}

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.log('HTTP server closed')
  })
  client.disconnect();
})

start()
