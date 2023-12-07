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
    <div className="text-black flex items-center justify-end gap-2 p-1">
      <div>
        {language === 'pt-BR' ? (
          <Image src={flagBR} width={55} height={39} alt="bandeira do brasil" />
        ) : (
          <div style={{ width: '55px', height: '39px' }}></div>
        )}
      </div>
      <select
        id="language"
        className="p-1 border rounded-sm"
        value={language}
        onChange={(e) => showSelected(e.target.value)}
      >
        <option value="pt-BR">BRA</option>
        <option value="US">EN</option>
        <option value="spanish">ES</option>
      </select>
    </div>
  );
}
