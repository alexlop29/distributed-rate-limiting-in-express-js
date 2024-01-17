# rate-limiting-in-express-js

## Getting Started

- [Node.js 20.11.0]()
- [Typescript]
- [dotenv]
- [multer]
- [aws-sdk]
- [express-openid-connect]
- [eslint]
- [express-rate-limit]
- [rate-limit-redis]
- [node-redis]

[nodemon]
[ts-node]

Types

- npm i --save-dev @types/node (process.env)
  npm i --save-dev @types/multer

remove .env & node_modules from commit history!

Resources:

- https://github.com/redis/node-redis/blob/master/docs/client-configuration.md

Review:

- https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html
  Express.js advanced topics and security best practices (e.g. cookies, etc.)
  Could make a good project

Resources - Redis Express Best Practices

- https://dev.to/realsteveig/getting-started-with-caching-using-redis-and-typescript-2c4n
- https://www.digitalocean.com/community/tutorials/how-to-implement-caching-in-node-js-using-redis
- https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html
- https://redis.io/docs/connect/clients/nodejs/#learn-more
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

Encountered typescript-specific errors when using top-level awaits

- https://github.com/TypeStrong/ts-node/issues/245#issuecomment-413019700
- https://github.com/standard-things/esm/issues/580
- https://www.alinalihassan.com/blog/top-level-await-typescript

Working on resolving the issue of using top level awaits by updating tsconfig!
