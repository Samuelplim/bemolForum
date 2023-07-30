
export const CommentsList = ({comments, ...rest }) => {
  const _renderItems = (item, index)=>{
    console.log("", item);
    return (
    <div key={index}>
      <p>{item.author.name}</p>
      <p>{item.content}</p>
      <span>{item.createdAt}</span>
    </div>
    )}

  return (
    <div {...rest} className="bg-blue-50">
      {comments ? comments.map(_renderItems):<p>Seja o primeiro a comentar!</p>}
    </div>
  );
};
