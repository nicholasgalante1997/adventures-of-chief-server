import http, { IncomingMessage, ServerResponse } from "http";
import dotenv from "dotenv";
import url from "url";
import { log } from "./log";

dotenv.config();

const PORT = process.env.PORT || (9986 as const);

const server = http.createServer(function (
  req: IncomingMessage,
  res: ServerResponse
) {
  res.end("hello world");
});

server.listen(PORT, () => {
  log("info", "server started on port __" + PORT + "__");
});
