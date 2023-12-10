'use client';
import save, { handleEmpty } from '@/app/api/submit/route';
import { useRef } from 'react';
import Button from '../common/Button';

export default function Form() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const siteRef = useRef(null);
  const budgetMediaRef = useRef(null);

  const handleSubmit = async (formData: FormData) => {
    const isValid = handleEmpty(formData);
    if (!isValid) {
      await save(formData);
      alert('Envio realizado!');
      return;
    }
    alert('Verifique os campos!');
  };

  return (
    <div className="rounded-md bg-white p-4 text-sm text-black font-normal">
      <h1 className="text-secondaryColor text-2xl font-bold pt-3 pb-6">
        Fale com um especialista
      </h1>
      <form action={handleSubmit}>
        <ul className="grid grid-rows-5 gap-4 pb-4">
          <li>
            <input
              className="bg-thirdColor w-full h-10 rounded-sm"
              type="text"
              placeholder="Nome completo"
              name="name"
              ref={nameRef}
              // required
            />
          </li>
          <li>
            <input
              className="bg-thirdColor w-full h-10 rounded-sm"
              type="email"
              placeholder="E-mail profissional"
              name="email"
              ref={emailRef}
              required
            />
          </li>
          <li>
            <input
              className="bg-thirdColor w-full h-10 rounded-sm"
              type="text"
              placeholder="Celular/Whatsapp"
              name="tel"
              ref={phoneRef}
              required
            />
          </li>
          <li>
            <input
              className="bg-thirdColor w-full h-10 rounded-sm"
              type="site"
              placeholder="Site"
              name="site"
              ref={siteRef}
              required
            />
          </li>
          <li>
            <select
              className="bg-thirdColor w-full h-10 rounded-sm"
              id="budgetMedia"
              name="budgetMedia"
              ref={budgetMediaRef}
              defaultValue="default"
              required
            >
              <option value="default" disabled>
                Escolha uma opção
              </option>
              <option value="valor1">valor1</option>
              <option value="valor2">valor2</option>
              <option value="valor3">valor3</option>
              <option value="valor4">valor4</option>
              <option value="valor5">valor5</option>
            </select>
          </li>
        </ul>
        <Button />
      </form>
    </div>
  );
}
