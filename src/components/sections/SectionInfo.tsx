import Image from 'next/image';
import React from 'react';
import imageOutline from '../../../public/images/utils/Outline.svg';

function SectionInfo() {
  return (
    <div className="z-10">
      <ul className="flex-col md:grid grid-col-1 md:pl-52 md:pr-52">
        <li>
          <ul className="grid gap-8 md:pl-12 md:pr-12">
            <li>
              <h2 className="text-4xl">
                Neste bairro, não há agência
                <br /> melhor. Garantimos.
              </h2>
            </li>
            <li className="max-w-xl m-auto">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
          </ul>
        </li>
        <li className="pt-28">
          <ul className="grid grid-cols-1 m-auto max-w-xs md:max-w-full  md:grid-cols-2 gap-12">
            <li>
              <div className="grid bg-white h-72 p-5 rounded-md text-start">
                <Image
                  src={imageOutline}
                  alt={'image Outline'}
                  width={100}
                  height={100}
                  style={{ width: 'auto', height: 'auto' }}
                />
                <h2 className=" text-secondaryColor text-2xl">
                  Digital Strategy
                </h2>
                <p className="text-thirdColor text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </li>
            <li>
              <div className="grid bg-white h-72 p-5 rounded-md text-start">
                <Image
                  src={imageOutline}
                  alt={'image Outline'}
                  width={100}
                  height={100}
                  style={{ width: 'auto', height: 'auto' }}
                />
                <h2 className=" text-secondaryColor text-2xl">
                  Digital Strategy
                </h2>
                <p className="text-thirdColor text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </li>
            <li>
              <div className="grid bg-white h-72 p-5 rounded-md text-start">
                <Image
                  src={imageOutline}
                  alt={'image Outline'}
                  width={100}
                  height={100}
                  style={{ width: 'auto', height: 'auto' }}
                />
                <h2 className=" text-secondaryColor text-2xl">
                  Digital Strategy
                </h2>
                <p className="text-thirdColor text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </li>
            <li>
              <div className="grid bg-white h-72 p-5 rounded-md text-start">
                <Image
                  src={imageOutline}
                  alt={'image Outline'}
                  width={100}
                  height={100}
                  style={{ width: 'auto', height: 'auto' }}
                />
                <h2 className=" text-secondaryColor text-2xl">
                  Digital Strategy
                </h2>
                <p className="text-thirdColor text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default SectionInfo;
