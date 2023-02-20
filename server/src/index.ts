import http from "http";
import app from "./app";
import Connection from "./configs/connection";
import { PORT } from "./configs/constants";

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
