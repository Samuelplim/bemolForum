export const ButtonLarge = ({title, ...rest})=> {

  return  (
 
    <button {...rest} className="w-full px-3.5 py-3 rounded-md text-sm bg-tints-cake-200 hover:bg-tints-cake-150 disabled:bg-tints-cake-100 text-white">
    {title}
    </button>
 
  )
}

