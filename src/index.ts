import express from "express";
import { EXPRESS_PORT } from "./config/environment";
import { EventEmitter } from "events";
import { auth, requiresAuth } from "express-openid-connect";
import { config } from "./config/auth";
import { documentRoute } from "./routes/document";
import { createClient } from "redis";
import { REDIS_URL } from "../src/config/environment";

const client = createClient({
  url: REDIS_URL,
});

const app = express();
app.use(auth(config));

app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.use("/documents", documentRoute);

const eventEmitter = new EventEmitter();

const start = async () => {
  try {
    console.log('waiting for Redis to connect');

    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();

    client.on("connect", () => {
      console.log("Connected to Redis");
      // Emit the 'ready' event
      eventEmitter.emit('ready');
    });

    console.log('Server is ready to start');
  } catch (error) {
    console.log(error);
  }
};

eventEmitter.on('ready', () => {
  app.listen(EXPRESS_PORT, () => {
    console.log("Server is running on http://localhost:${EXPRESS_PORT}");
  });
});

start();

export { client, start };



// process.on("SIGTERM", () => {
//   console.log("SIGTERM signal received: closing HTTP server");
//   server.close(() => {
//     console.log("HTTP server closed");
//   });
//   client.disconnect();
// });
