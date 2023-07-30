import { ButtonLarge, InputLarge } from "../components";
import MarcaBemol from "../assets/marca-bemol.svg";


export const SingInPage = ()=> {
  return(
  <main className="bg-white px-10 flex flex-col gap-6 h-screen justify-center items-center">
    <div>
    <h2 className="text-tints-cake-150 font-bold">Forum</h2>
    <img src={MarcaBemol} alt="Bemol" />
    </div>
    <InputLarge title="Seu email" placeholder="email" />
    <InputLarge title="Sua senha" placeholder="senha" />
    <ButtonLarge title={"Entrar"}/>
  </main>
  )}