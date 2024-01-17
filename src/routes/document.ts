import express from "express";
import { requiresAuth } from "express-openid-connect";
import { Document } from "../controller/document";
import { upload } from "../config/multer";
// import { limiter } from "../config/ratelimit";
import { facilitateLimit } from "../config/ratelimit";
import { createClient } from "redis";
import { REDIS_URL } from "../config/environment";

const documentRoute = express.Router();
documentRoute.use(express.json());

const checkRateLimit = async (_req: any, _res: any, next: any) => {
  console.log(REDIS_URL);

  try {
    const client = createClient({
      url: REDIS_URL,
    });
  
    console.log("waiting for Redis to connect");
  
    client.on("error", (err) => {
      throw err;
    });
  
    await client.connect();

    console.log(`checking keys: ${await client.keys("*")}`);

    try {
      console.log(`checking response of ratelimit: ${await facilitateLimit(client)}`);
    } catch (error) {
      `capturing intenral error at ratelimit: ${error}`;
    }

    await client.quit(); // testing to see if we are propely closing the connection
    next();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

documentRoute.post(
  "/",
  requiresAuth(),
  upload.single("file"),
  checkRateLimit,
  async (req, res) => {
    let user = req.oidc.user?.sub;
    let file = req.file;
    if (!file) {
      res.status(400).json({ Message: "Bad Request" });
      return;
    }
    const document = new Document(user, file);
    try {
      document.save();
      res.status(200).json({ Message: "OK" });
    } catch {
      res.status(500).json({ Message: "Internal Server Error" });
    }
  },
);

export { documentRoute };
