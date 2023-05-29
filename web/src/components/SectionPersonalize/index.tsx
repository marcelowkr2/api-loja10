import React from "react";
import Icon from "../../assets/IconPersonalize.svg";

function SectionPersonalize() {
  return (
    <div className="bg-bege-100 m-auto">
      <div className="container m-auto w-10/12 py-16">
        <p className="text-h1 font-semibold text-center text-rosa-200 pb-10">
          Conheça nosso Trabalho
        </p>
        <div className="bg-[#FFFFFF] md:flex py-5 px-8  rounded-[30px]">
          <div>
            <p className="text-h4">
              Aqui, nossos clientes têm sempre razão! Se não encontrou no
              catálogo algo do seu gosto ou apenas quer algo mais exclusivo,
              personalize seus acessórios do seu jeitinho! Você pode
              personalizar uma tiara, um laço, uma boina ou um arranjo para o
              seu cabelo. Escolha os materiais e combinações que deseja e faça
              um orçamento conosco.
            </p>
            <p className="font-semibold text-h4">Teremos a maior satisfação em poder atender!</p>
          </div>
            <img className="w-20 relative top-14 left-6" src={Icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SectionPersonalize;
