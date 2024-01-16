import { createClient } from "redis";
import { REDIS_URL } from "./environment";

const client = createClient({
    url: REDIS_URL
});

export { client };
