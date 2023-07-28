import { Link } from "react-router-dom";

export const VerticalList = ({ topic, ...rest }) => {


  return (
    <div {...rest}>
      <p>{topic.title}</p>
    </div>
  );
};
