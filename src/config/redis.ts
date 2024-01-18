import { RedisClientType, createClient } from "redis";
import { REDIS_URL } from "./environment.js";

let client: RedisClientType;

try {
  client = createClient({
    url: REDIS_URL,
  });
  client.on("error", (err: any) => console.log("Redis Client Error", err));
  client.connect();
} catch (error) {
  console.log(`Redis Client Error: ${error}`);
}

export { client };
