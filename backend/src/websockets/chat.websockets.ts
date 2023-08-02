import { io } from "../server";
import { TopicsController } from "../controllers/topics.controller";
const topicsController = new TopicsController();

io.on("connection", (socket) => {
  console.log("socket is ready for connection in io1 namespace", socket.id);

  socket.on("select_topic", (data) => {
    console.log(data);
  });

  // Handle socket events specific to the first namespace
});
