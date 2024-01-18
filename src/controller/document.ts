import { s3 } from "../config/index.js";

class Document {

  constructor(
    private readonly user: string,
    private readonly file: Express.Multer.File,
  ) {}

  async save() {
    try {
      let params = {
        Bucket: "us-east-1-documents-for-node-app",
        Key: `${this.user}-${this.file.originalname}-${Math.random() * (100 - 50) + 50}`, // Arbitrary to allow multiple uplaods of the same doc for testing
        Body: this.file.buffer,
      };
      await s3.upload(params).promise();
      return { Status: 200, Message: "OK" };
    } catch (error) {
      throw { Status: 500, Message: error };
    }
  }
}

export { Document };
