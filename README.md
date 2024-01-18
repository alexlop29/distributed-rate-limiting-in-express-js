## About

Demonstrates how to implement a distributed rate-limiting solution across multiple backend tasks using a Redis cache

## 🏄 Getting Started

```
https://github.com/alexlop29/rate-limiting-in-express-js.git
cd rate-limiting-in-express.js
docker-compose up --build -d
```

### 🔧 Core libraries

- [aws-sdk](https://www.npmjs.com/package/aws-sdk)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express-openid-connect](https://github.com/auth0/express-openid-connect)
- [express-rate-limit](https://express-rate-limit.mintlify.app/overview)
- [express.js](https://expressjs.com)
- [multer](https://github.com/expressjs/multer)
- [rate-limit-redis](https://www.npmjs.com/package/rate-limit-redis)
- [node-redis](https://github.com/redis/node-redis)
- [Node.js 20.11.0](https://nodejs.org/en)

### 💻 Development Libraries

- [Docker](https://docs.docker.com)
- [Docker Compose](https://docs.docker.com/get-started/08_using_compose/)
- [Docker Desktop](https://docs.docker.com/desktop/)
- [Docker - Node](https://hub.docker.com/_/node/)
- [Docker - Redis](https://hub.docker.com/_/redis)
- [eslint](https://eslint.org)
- [nodemon](https://nodemon.io)
- [Postman - VS Code](https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode)
- [Prettier](https://prettier.io)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [Typescript](https://www.typescriptlang.org)

### 📛 Types

- [@types/multer](https://www.npmjs.com/package/@types/multer)
- [@types/node](https://www.npmjs.com/package/@types/node)

## 📑 Additional Readings

- [Node.js Redis - Docs](https://redis.io/docs/connect/clients/nodejs/#learn-more)
- [Node.js Redis - createClient() Config Docs](https://github.com/redis/node-redis/blob/master/docs/client-configuration.md)
- [Express.js Graceful Shutdown](https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html)
- [CommonJs & ESM](https://blog.logrocket.com/commonjs-vs-es-modules-node-js/)
- [Design Patterns Explained – Dependency Injection with Code Examples](https://stackify.com/dependency-injection/)
- [Dependency Injection - Stack Overflow](https://stackoverflow.com/questions/130794/what-is-dependency-injection)

## Disclaimer
The scope of the project is limited to demonstrating how to implement
a distributed rate limiting solution in a backend microservice. 

There are several potential areas of improvement to get this demonstration
production-ready.

Suggestions:
- Add a validation function to the Document controller.
- Remove the use of the Math.random() function in the Document controller, merely used for demonstration purposes.
- Remove synchronous functions, such as console.log(), and replace with an ehanced error handling solution, such as Sentry.
- Apply security, performance, and stability best practices in an express.js application. 
- Enhance tests.

