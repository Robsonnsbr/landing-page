'use client';
import { useState } from 'react';

interface iForm {
  name: string;
  email: string;
  phone: string;
  site: string;
  budgetMedia: string;
}

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [site, setSite] = useState('');
  const [budgetMedia, setBudgetMedia] = useState('');

  const sendForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const objForm: iForm = {
      name,
      email,
      phone,
      site,
      budgetMedia
    };

    console.log('Envie!', objForm);
  };

  return (
    <div className="rounded-md bg-white p-4 text-sm text-black font-normal">
      <h1 className="text-secondaryColor text-2xl font-bold pt-3 pb-6">
        Fale com um especialista
      </h1>
      <form method="get">
        <ul className="grid grid-rows-5 gap-4 pb-4">
          <li>
            <input
              className="bg-thirdColor w-full h-10 rounded-sm"
              type="text"
              placeholder="Nome completo"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </li>
          <li>
            <input
              className="bg-thirdColor w-full h-10 rounded-sm"
              type="text"
              placeholder="E-mail profissional"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </li>
          <li>
            <input
              className="bg-thirdColor w-full h-10 rounded-sm"
              type="text"
              placeholder="Celular/Whatsapp"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </li>
          <li>
            <input
              className="bg-thirdColor w-full h-10 rounded-sm"
              type="text"
              placeholder="Site"
              onChange={(e) => setSite(e.target.value)}
              required
            />
          </li>
          <li>
            <select
              className="bg-thirdColor w-full h-10 rounded-sm"
              name="Orçamento para mida"
              id="budgetMedia"
              value={budgetMedia}
              required
              onChange={(e) => setBudgetMedia(e.target.value)}
            >
              <option value="valor1">valor1</option>
              <option value="valor2">valor2</option>
              <option value="valor3">valor3</option>
              <option value="valor4">valor4</option>
              <option value="valor5">valor5</option>
            </select>
          </li>
        </ul>
        <button
          className="bg-primaryColor h-12 w-full rounded-sm"
          type="submit"
          onClick={(e) => sendForm(e)}
        >
          <span className="text-white">ENVIAR</span>
        </button>
      </form>
    </div>
  );
}

export default Form;
