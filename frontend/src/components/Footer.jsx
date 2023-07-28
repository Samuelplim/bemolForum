import { Link } from "react-router-dom";
import { LinkLight } from "./LinkLight";

export const Footer = ({...rest }) => {

  const data =[{
    title:"INSTITUCIONAL",
    data:[{
      title:"Quem somos", uri:"https://www.bemol.com.br/conteudo/institucional/quem-somos"
    },{title:"Nossas Lojas", uri:"https://www.bemol.com.br/nossas-lojas",
    },{title:"Cartão Bemol", uri:"https://cartao.bemol.com.br/home",
    },{title:"Bemol Digital", uri:"https://www.bemol.com.br/",
    },{title:"Trabalher Conosco", uri:"https://bemol.gupy.io/",
    }]},{
      title:"MINHA CONTA",
      data:[{
        title:"Minha conta", uri:"https://www.bemol.com.br/conteudo/institucional/quem-somos"
      },{title:"Histórico de compras", uri:"https://www.bemol.com.br/nossas-lojas",
      },{title:"Meus pagamentos", uri:"https://cartao.bemol.com.br/home",
      },{title:"Avaliações de Produtos", uri:"https://www.bemol.com.br/",
      },{title:"Meu Cartão Bemol", uri:"https://bemol.gupy.io/",
      },{title:"Lista de Desejos", uri:"https://bemol.gupy.io/",
    }]},{
      title:"SERVIÇOS BEMOL",
      data:[
        {title:"Empréstimos", uri:"https://www.bemol.com.br/conteudo/institucional/quem-somos"},
        {title:"Conta Bemol", uri:"https://www.bemol.com.br/nossas-lojas",},
        {title:"Pague Suas Parceiras", uri:"https://cartao.bemol.com.br/home",},
        {title:"Lista de Presente", uri:"https://www.bemol.com.br/",},
        {title:"Simular Pagamentos", uri:"https://bemol.gupy.io/",},
        {title:"Renegocie Aqui", uri:"https://bemol.gupy.io/",},
        {title:"Entrega Bemol", uri:"https://bemol.gupy.io/",},
        {title:"Montagem de Produtos", uri:"https://bemol.gupy.io/",},
        {title:"Assistência Técnica", uri:"https://bemol.gupy.io/",},
      ]},{
        title:"CENTRAL DE AJUDA",
        data:[
          {title:"Atendimento", uri:"https://www.bemol.com.br/conteudo/institucional/quem-somos"},
          {title:"Garantia de Satisfação Bemol", uri:"https://www.bemol.com.br/nossas-lojas",},
          {title:"Política de Privacidade", uri:"https://cartao.bemol.com.br/home",},
          {title:"Política de Troca e Devolução", uri:"https://www.bemol.com.br/",},
          {title:"Política de Frete e Entrega", uri:"https://bemol.gupy.io/",},
          {title:"Regulamento do Bônus Bemol", uri:"https://bemol.gupy.io/",},
          {title:"Cibersegurança", uri:"https://bemol.gupy.io/",},
        ]},
  ]

  return (
    <div {...rest} className="bg-tints-cake-150">
      <div className="grid grid-cols-2">
        {data.map((item, index) => (
          <div key={index} className="p-2" >
            <p className="font-bold text-light-100">{item.title}</p>
             <div className="flex flex-col">
              {item.data.map((item, index) =>(
                <Link key={index} to={item.uri} className="text-xs m-1 text-light-200">{item.title}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
