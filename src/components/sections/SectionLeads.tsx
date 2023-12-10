import Image from 'next/image';
import React from 'react';
import imageLeads from '/public/images/utils/Grupo-2098.svg';
import Background from '../background/Background';

function SectionLeads() {
  return (
    <div className="relative h-fit w-full">
      <Background />
      <div className="absolute left-0 top-24 z-10">
        <ul className="flex-col  md:grid grid-cols-2 md:pl-28 md:pr-28">
          <li className="flex flex-col items-center md:grid grid-rows-3 md:text-start gap-6">
            <h1 className=" text-3xl md:text-5xl">
              1Melhor Agência de marketing do bairro
            </h1>
            <p>
              Somos uma agência de performance digital, aceleramos vendas e
              aquisição de leads para grander marcas
            </p>
            <button className="bg-white hover:bg-primaryColor p-2 rounded-sm max-w-min max-h-12">
              <span className="text-xs md:text-lg text-secondaryColor whitespace-nowrap md:pl-12 md:pr-12">
                Aumentar Vendas
              </span>
            </button>
          </li>
          <li className="flex items-start justify-end">
            <Image
              src={imageLeads}
              width={535}
              height={383}
              alt="imagem leads"
              className="md:pt-1 md:-m-9"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SectionLeads;
