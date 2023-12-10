'use client';
import save from '@/app/api/submit/route';
import { useRef } from 'react';

import { useFormStatus } from 'react-dom';

type iForm = Record<string, string>;

const objForm: iForm = {
  name: '',
  email: '',
  phone: '',
  site: '',
  budgetMedia: ''
};

function Form() {
  const { pending } = useFormStatus();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const siteRef = useRef(null);
  const budgetMediaRef = useRef(null);

  const handleEmpty = (objForm: iForm) => {
    const isEmpty = Object.values(objForm).some((value) => value === '');
    return isEmpty;
  };

  const handleSubmit = async (formData: FormData) => {
    const keys = ['name', 'email', 'phone', 'site', 'budgetMedia'];

    try {
      keys.forEach((key) => {
        const value = formData.get(key);
        objForm[key] = typeof value === 'string' ? value : '';
      });

      const formIsEmpty = handleEmpty(objForm);

      if (!formIsEmpty) {
        await save(objForm);
        console.log('Envie!', objForm);
        console.log(pending);
      }
    } catch (error: unknown) {
      console.log('Error:', error);
    } finally {
      Object.keys(objForm).forEach((key) => {
        delete objForm[key];
      });
    }
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
              required
            />
          </li>
          <li>
            <input
              className="bg-thirdColor w-full h-10 rounded-sm"
              type="text"
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
              name="phone"
              ref={phoneRef}
              required
            />
          </li>
          <li>
            <input
              className="bg-thirdColor w-full h-10 rounded-sm"
              type="text"
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
        <button
          aria-disabled={pending}
          className="bg-primaryColor h-12 w-full rounded-sm"
          type="submit"
        >
          <span className="text-white">ENVIAR</span>
        </button>
      </form>
    </div>
  );
}

export default Form;
