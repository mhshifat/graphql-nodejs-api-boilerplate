import { GraphQLServer } from "graphql-yoga";
import { config } from "./config";
import { CBD } from "./database/index";
import { resolvers, typeDefs } from "./modules";

export interface IContext {}

const { api, db } = config;
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: (): IContext => ({}),
});

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
