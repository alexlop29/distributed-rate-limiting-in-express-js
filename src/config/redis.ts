import { RedisClientType } from "redis";
import { REDIS_URL } from "./environment";
const redis = require("redis");

let client: RedisClientType;

try {
  client = redis.createClient({
    url: REDIS_URL,
  });
  client.on("error", (err: any) => console.log("Redis Client Error", err));
  client.connect();
} catch (error) {
  console.log(`Redis Client Error: ${error}`);
}

export { client };
