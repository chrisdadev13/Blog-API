import { ApolloServer, gql } from "apollo-server";
import { AppDataSource } from "./db/db";

const person = [
  {
    firstName: "Chris",
    lastName: "Pacheco",
    username: "chrisdadev",
    password: "abc",
  },
  {
    firstName: "Pedrolino",
    lastName: "Dos Santos",
    username: "pedrolinodadev",
    password: "abc",
  },
];

const typeDefs = gql`
  type User {
    firstName: String
    lastName: String
    username: String
    password: String
  }

  type Query {
    usersCounter: Int!
    allUsers: [User]
  }
`;

const resolvers = {
  Query: {
    usersCounter: () => person.length,
    allUsers: () => person,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

AppDataSource.initialize()
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.log(err));

server.listen().then(({ url }) => {
  console.log(`Server is running at: ${url}`);
});

AppDataSource.query("SELECT * FROM user;")
  .then((response) => {
    console.log(response);
  })
  .catch((err: any) => console.log(err));
