import { useNavigate } from "react-router-dom"

export const VerticalList = ({data}) => {

  const navigate = useNavigate();

  function handleTopicPreview(_id){
    navigate(`/topics/${_id}`)
  }


  const _renderItems = (item, index) => {
    return (
    <div key={index} className="py-2 bg-gradient-to-t from-white to-slate-100" onClick={()=>handleTopicPreview(item._id)}>
      <p className="ml-2 font-medium capitalize">{item.title}</p>
      <p className="ml-2 text-sm mb-2">{item.content}</p>
      <div className="h-1 bg-tints-cake-100"/>
    </div>
    )}
  return (
    <div>
      {data.map(_renderItems)}
    </div>
  );
};
