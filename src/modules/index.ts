import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { join } from "path";
import { Resolvers } from "../types/graphql";

export interface IResolvers extends Resolvers {}

export const typeDefs = mergeTypeDefs(
  loadFilesSync(join(__dirname, "./**/schema.gql"))
);

export const resolvers = mergeResolvers(
  loadFilesSync(join(__dirname, "./**/resolvers.ts"))
);
