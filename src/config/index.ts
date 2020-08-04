import "dotenv/config";

const env = process.env;
export const config = {
  api: {
    apiName: env.API_NAME || "Graphql NodeJS API",
    port: env.PORT || 5000,
    inProd: env.NODE_ENV === "production",
    endPoint: env.ENDPOINT || "/api/v1",
    clientUri: env.CLIENT_URI || "http://localhost:3000",
    apiUri: env.API_URI || "http://localhost:3000",
    get corsOrigin(): string[] {
      return (env.CORS_ORiGIN || this.clientUri).split(",");
    },
    get logTime(): string {
      const date = new Date();
      const h = date.getHours() % 12;
      const m = date.getMinutes();
      const s = date.getSeconds();
      return `${h < 10 ? "0" + h : h}:${m}:${s}`;
    },
  },
  db: {
    user: env.MONGO_USER,
    pass: env.MONGO_PASS,
    name: env.MONGO_DBNAME,
    get uri(): string {
      return `mongodb+srv://${this.user}:${this.pass}@web-dev-7rlf6.mongodb.net/${this.name}?retryWrites=true&w=majority`;
    },
  },
};
