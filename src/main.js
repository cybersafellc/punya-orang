import { web } from "./app/web.js";
import { logger } from "./app/logging.js";
import http from "http";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;

const server = http.createServer(web);
server.listen(port, () => {
  logger.info("server running on port " + port);
});
