'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import flagBR from 'public/images/utils/Imagem-19@2x.png';
//TODO: fix this flag, ela deve aparecer no lugar do nome.
export default function SelectLang() {
  const [language, setLanguage] = useState('pt-BR');

  function showSelected(value: string) {
    setLanguage(value);
  }

  return (
    <div className="grid grid-col-2 md:grid-cols-2 w-full h-12 items-center text-black justify-end">
      <div className="col-star-1 w-14 md:col-start-3 items-start">
        {language === 'pt-BR' && (
          <Image src={flagBR} width={52} height={36} alt="bandeira do brasil" />
        )}
      </div>
      <select
        id="language"
        className="col-start-2 md:col-start-4 w-14 border rounded-sm md:w-auto h-9"
        value={language}
        onChange={(e) => showSelected(e.target.value)}
      >
        <option value="pt-BR">BRA</option>
        <option value="US">ENG</option>
        <option value="spanish">ESP</option>
      </select>
    </div>
  );
}
