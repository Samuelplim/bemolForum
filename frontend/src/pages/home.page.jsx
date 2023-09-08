import React,{ useEffect, useState } from "react";
import { ButtonLarge, NavMenu, Footer, VerticalList } from "../components";
import { indexTopics } from "../services/topics.services";

const topics = await indexTopics().then(respons=>{return respons.data})
export const HomePage = () => {

  return (
    <>
    <header><NavMenu/></header>
    <main className="bg-naturalWhite">
     <div className=" mt-4 px-2">
      <p>Não encontrou o que procura?</p>
      <ButtonLarge title="criar um topico" className="" />
    </div>
    
    <section className="mt-4 h-96">
      <p className="pl-2 font-medium text-lg">Topicos</p>
      {topics? <VerticalList data={topics}/>:(<div className="h-full items-center flex px-4"> <p className="font-medium text-center">Não encontrei nenhum topico no momento, tente criar um novo topico ou volte mais tarde!</p></div>)}
     </section>
    </main>
    <Footer />
    </>
  );
};
