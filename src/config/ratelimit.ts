import { rateLimit } from "express-rate-limit";
import { RedisStore } from "rate-limit-redis";
// import { client } from "./redis";

const facilitateLimit = async (client: any) => {
  console.log(`client in faciliatet limit: ${JSON.stringify(client)}`);

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 1,
    standardHeaders: "draft-7",
    legacyHeaders: false,

    store: new RedisStore({
      sendCommand: (...args: string[]) => client.sendCommand(args),
    }),
  });

  console.log(`limiter in faciliatet limit: ${limiter}`);

  return limiter;
};

export { facilitateLimit };

// export { limiter };
