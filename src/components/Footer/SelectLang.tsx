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
    <div className="text-black flex items-center">
      <div className="m-1">
        {language === 'pt-BR' ? (
          <Image src={flagBR} width={48} height={48} alt="bandeira do brasil" />
        ) : (
          <div style={{ width: '46px', height: '32px' }}></div>
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
