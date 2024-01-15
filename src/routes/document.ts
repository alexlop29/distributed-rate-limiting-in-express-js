import express from "express";
import { requiresAuth } from "express-openid-connect";
import { Document } from "../controller/document";
import { upload } from "../config/multer";

const documentRoute = express.Router();
documentRoute.use(express.json());

documentRoute.post(
  "/",
  requiresAuth(),
  upload.single("file"),
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
