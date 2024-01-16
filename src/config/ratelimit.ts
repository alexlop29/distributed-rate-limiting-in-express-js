import { rateLimit } from "express-rate-limit";
import { RedisStore } from "rate-limit-redis";
import { client } from "./redis";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 1,
  standardHeaders: "draft-7",
  legacyHeaders: false,

  store: new RedisStore({
    sendCommand: (...args: string[]) => client.sendCommand(args),
  }),
});

export { limiter };
