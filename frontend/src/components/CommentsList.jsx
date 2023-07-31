import { DateTime } from "luxon"

import { useAuth } from "../hooks/auth"

export const CommentsList = ({comments, ...rest }) => {
  const { customer } = useAuth()
  const _renderItems = (item, index)=>{
    const isAthor = item.author._id ===customer._id
    return (
    <div key={index} className={ isAthor ?"flex flex-col bg-blue-50 rounded-md p-2 max-w-sm":"flex flex-col bg-blue-100 rounded-md p-2 max-w-sm self-end"}>
      {isAthor && <p className=" font-medium text-xs">{item.author.name}</p>}
      <p>{item.content}</p>
      <p className="self-end text-xs">{DateTime.fromISO(item.createdAt).setLocale('pt').toFormat('MM:HH')}</p>
    </div>
    )}

  return (
    <div {...rest} className="flex flex-col items-start gap-2 my-3">
      {comments ? comments.map(_renderItems):<p>Seja o primeiro a comentar!</p>}
    </div>
  );
};
