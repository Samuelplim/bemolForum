export const InputLarge = ({title, placeholder, icon})=> {

  return  (
  <div className="w-full flex flex-col items-start gap-2">
    <span className="text-dark-400">{title}</span>
    <div className="w-full flex bg-light-100  rounded-lg">
      <input placeholder={placeholder} type="text" className="w-full px-3.5 py-3 rounded-lg"/>
      { icon && <button className="mr-1"><img src={icon} alt="icon" /></button>}
    </div>
  </div>
  )
}

