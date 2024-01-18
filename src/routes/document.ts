/*
Add note on the use of console.log(); Do not use in production - synchronous operation!
Use Sentry.
*/

import express from "express";
import openidConnect from "express-openid-connect";
import { Document } from "../controller/index.js";
import { upload, limiter } from "../config/index.js";

const documentRoute = express.Router();
documentRoute.use(express.json());

const { requiresAuth } = openidConnect;

documentRoute.post(
  "/",
  requiresAuth(),
  upload.single("file"),
  limiter,
  async (req, res) => {
    let user = req.oidc.user?.sub;
    let file = req.file;
    if (!file) {
      res.status(400).json({ Message: "Bad Request" });
      return;
    }
    const document = new Document(user, file);
    try {
      await document.save();
      res.status(200).json({ Message: "OK" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ Message: "Internal Server Error" });
    }
  },
);

export { documentRoute };
