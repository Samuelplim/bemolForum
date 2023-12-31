import { TopicsInterface } from "../interfaces";
import { Topics } from "../models/topics.model";

class TopicsRepository {
  index() {
    return Topics.find();
  }

  findById(_id: Partial<TopicsInterface>) {
    return Topics.findOne({ _id });
  }

  findByTitle(title: string) {
    return Topics.findOne({ title });
  }

  create(topic: TopicsInterface) {
    return Topics.create(topic);
  }

  update(_id: string, topic: Partial<TopicsInterface>) {
    return Topics.updateOne({ _id }, topic);
  }
}

export { TopicsRepository };
