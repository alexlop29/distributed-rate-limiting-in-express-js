import pkg from 'aws-sdk';
const { S3 } = pkg;

class Document {
  private s3 = new S3({ apiVersion: "2006-03-01" });

  constructor(
    private readonly user: string,
    private readonly file: Express.Multer.File,
  ) {}

  async save() {
    try {
      let params = {
        Bucket: "us-east-1-documents-for-node-app",
        Key: `${this.user}-${this.file.originalname}`,
        Body: this.file.buffer,
      };
      await this.s3.upload(params).promise();
      return { Status: 200, Message: "OK" };
    } catch (error) {
      throw { Status: 500, Message: error };
    }
  }
}

export { Document };
