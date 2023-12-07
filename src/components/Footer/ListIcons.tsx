import Link from 'next/link';
import React from 'react';
import youtubeIcon from 'public/images/icons/Icon awesome-youtube.svg';
import instagramIcon from 'public/images/icons/Icon awesome-instagram.svg';
import linkedinIcon from 'public/images/icons/Icon awesome-linkedin.svg';
import facebookIcon from 'public/images/icons/Icon awesome-facebook-f.svg';
import Image from 'next/image';

function ListIcons() {
  return (
    <ul
      className="grid grid-cols-4 items-center"
      style={{ marginRight: '-6%' }}
    >
      <li className="flex justify-center">
        <Link href="/">
          <Image src={youtubeIcon} width={50} height={40} alt="ícone youtube" />
        </Link>
      </li>
      <li className="flex justify-center">
        <Link href="/">
          <Image
            src={instagramIcon}
            width={40}
            height={40}
            alt="ícone instagram"
          />
        </Link>
      </li>
      <li className="flex justify-center">
        <Link href="/">
          <Image
            src={facebookIcon}
            width={24}
            height={40}
            alt="ícone facebook"
          />
        </Link>
      </li>
      <li className="flex justify-center">
        <Link href="/">
          <Image
            src={linkedinIcon}
            width={40}
            height={40}
            alt="ícone linkedin"
          />
        </Link>
      </li>
    </ul>
  );
}

export default ListIcons;
