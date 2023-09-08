import { io } from "../server";
import { TopicsRepository } from "../repositories/topics.repository";
import { TopicsService } from "../services/topics.services";

const topicsRepository = new TopicsRepository();
const topicsService = new TopicsService(topicsRepository);

io.on("connection", (socket) => {
  console.log("socket is ready for connection in io1 namespace", socket.id);

  socket.on("select_topic", (res) => {
    const { data, customer } = res;

    if ("customersActives" in data && data.customersActives.length) {
      if (
        !data.customersActives.find(
          (idCustomer: string) => idCustomer === customer._id
        )
      ) {
        data.customersActives.push(customer._id);
        topicsService.update(data);
      }
    } else {
      data.customersActives.push(customer._id);
      async () => await topicsService.update(data);
    }
  });

  // Handle socket events specific to the first namespace
});
