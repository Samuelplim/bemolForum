import { useState } from "react";

import { ButtonLarge, InputLarge } from "../components";
import MarcaBemol from "../assets/marca-bemol.svg";
import { useAuth } from "../hooks/auth";



export const SingInPage = ()=> {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  const handleSignIn = () =>{
    signIn({email, password})
  }

  return(
  <main className="bg-white px-10 flex flex-col gap-6 h-screen justify-center items-center">
    <div>
    <h2 className="text-tints-cake-150 font-bold">Forum</h2>
    <img src={MarcaBemol} alt="Bemol" />
    </div>
    <InputLarge title="Seu email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
    <InputLarge title="Sua senha" placeholder="senha" onChange={e => setPassword(e.target.value)}/>
    <ButtonLarge title={"Entrar"} onClick={handleSignIn}/>
  </main>
  )}