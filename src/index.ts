import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import { Request, Response } from "express";
import { config } from "./config";
import { CBD } from "./database";
import { models, ModelsType } from "./models";
import { resolvers, typeDefs } from "./modules";

export interface IContext {
  models: ModelsType;
  req: Request;
  res: Response;
}

const { api, db } = config;
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: ({ request, response }): IContext => ({ models }),
});

server.express.use(helmet());
CBD(db.uri)
  .then(() =>
    server.start({
      port: api.port,
      endpoint: api.endPoint,
      playground: api.inProd ? false : "/playground",
      cors: {
        origin: api.corsOrigin,
      },
    })
  )
  .then(() => {
    console.log(
      `[${api.logTime}] Database connection established | ${db.name}`
    );
    console.log(
      `[${api.logTime}] Server connection established | http://localhost:${api.port}`
    );
  })
  .catch((err) => {
    console.log("SERVER_ERROR", err);
    process.exit();
  });
