import React from 'react';
import Background from '../background/Background';
import Form from '../form/form';

function SectionContact() {
  return (
    <div className="relative pb-28">
      <Background props={'cover'} />
      <div className="absolute left-0 top-24 z-10 md:pl-28 md:pr-28">
        <ul className="flex-col md:grid  grid-cols-2 justify-items-end">
          <li className="flex flex-col items-center md:grid grid-rows-3 md:text-start md:pr-14">
            <h2 className=" text-xl text-primaryColor">ENTRE EM CONTATO</h2>
            <p className=" text-3xl pb-4">
              Aumente seu resultado de vendas e performance
            </p>

            <span className="text-xs text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </span>
          </li>
          <li>
            <Form />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SectionContact;
