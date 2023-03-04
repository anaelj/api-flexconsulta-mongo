import { createClient } from "redis";

const url = `${process.env.REDIS_URL}:${process.env.REDIS_PORT}`;

const redisClient = createClient({
  url,
});

export default redisClient;
