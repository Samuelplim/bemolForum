import { io } from "../server";

io.on("connection", (socket) => {
  console.log("socket is ready for connection in io1 namespace", socket.id);

  // Handle socket events specific to the first namespace
});
