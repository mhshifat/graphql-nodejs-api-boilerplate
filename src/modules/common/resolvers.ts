import { config } from "../../config";
import { IResolvers } from "../index";

export const resolvers: IResolvers = {
  Query: {
    root: () => ({
      apiName: "Graphql NodeJS API",
      endPoint: config.api.endPoint,
      apiUri: config.api.apiUri,
    }),
  },
};
