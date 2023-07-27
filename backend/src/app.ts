import connection from "./config/database";
import { httpServer, io, app } from "./server";
import "./websockets/chat.websockets";

httpServer.listen(app.get("port"), () => {
  connection
    .then(() => console.log("conexão com banco de dados aberta"))
    .catch((err) => console.log(err));
  console.log("Express server listening on port " + app.get("port"));
});
