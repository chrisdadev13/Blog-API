import Connection from "./db/connection";
import schema from "./api/schema";
import { ApolloServer } from "apollo-server";

const server = new ApolloServer({
  schema,
});

server.listen().then(({ url }) => {
  console.log("server ready in", url);
  Connection.initialize();
});
