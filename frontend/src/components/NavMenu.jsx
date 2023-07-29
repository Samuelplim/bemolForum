import { UserIcon } from '@heroicons/react/24/solid'
import { InputLarge } from ".";
import OptionsSVG from "../assets/marca-bemol.svg";

export const NavMenu = () => {
  return (
    <nav className="px-2 pt-16 pb-6 w-full flex gap-2 justify-around items-center bg-tints-cake-200">
      <img alt="Button Options" className=" h-12" src={OptionsSVG} />
      <InputLarge placeholder="Busque um topico aqui" magnifyingGlass/>
      <button><UserIcon  className="h-6 w-6 text-white"/></button>
    </nav>
  );
};
