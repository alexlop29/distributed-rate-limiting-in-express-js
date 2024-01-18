import pkg from "aws-sdk";
const { S3 } = pkg;

const s3 = new S3({ apiVersion: "2006-03-01" });

export { s3 };
