
export const CommentsList = ({comments, ...rest }) => {
  const _renderItems = (item, index)=>{

    return (
    <div key={index}>
      <p>{item.content}</p>
    </div>
    )}

  return (
    <div {...rest} className="bg-tints-cake-150">
      {comments ? comments.map(_renderItems):<p>Não encontrei nenhum comentario</p>}
    </div>
  );
};
