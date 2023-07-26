import { ButtonLarge, NavMenu } from "../components";


export const HomePage = () => {

  return (
    <>
    <header><NavMenu/></header>
    <main className="bg-naturalWhite h-screen">
     <div className=" mt-4 px-2">
      <p>Não encontrou o que procura?</p>
      <ButtonLarge title="criar um topico" className="" />
    </div>

     
    </main>
    </>
  );
};
