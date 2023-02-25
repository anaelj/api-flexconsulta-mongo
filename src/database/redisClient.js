import { createClient } from "redis";

const url = process.env.REDIS_URL;

const redisClient = createClient({
  url,
});
await redisClient.connect();

export default redisClient;
