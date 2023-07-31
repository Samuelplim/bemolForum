import { MagnifyingGlassIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid'
export const InputLarge = ({title, placeholder, paperAirPlane, magnifyingGlass, ...rest})=> {

  return  (
  <div className="w-full flex flex-col items-start gap-2">
    {title && <span className="text-dark-400">{title}</span>}
    <div className="w-full flex bg-light-100  rounded-lg border-tints-cake-200 border-2">
      <input placeholder={placeholder} type="text" className="w-full px-3.5 py-3 rounded-lg" {...rest}/>
      { paperAirPlane && <button className="mr-1"><PaperAirplaneIcon className="h-6 w-6 text-tints-cake-200 self-center"/></button>}
      
      {magnifyingGlass && <button className="mr-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-tints-cake-200"/>
      </button>}
    </div>
  </div>
  )
}

