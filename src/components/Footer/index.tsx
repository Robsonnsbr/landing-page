import Link from 'next/link';
import SelectLang from './SelectLang';
import ListIcons from './ListIcons';

function Footer(props: { className: string }) {
  return (
    <footer className={`${props.className} flex`}>
      <ul className="grid grid-cols-1 md:grid-cols-4  w-full justify-between pt-16">
        <li>
          <ul className="md:grid text-center md:text-left gap-6">
            <li>
              <h2 className="text-5xl">agência</h2>
            </li>
            <li>
              <p className="whitespace-nowrap">0800 800 800</p>
            </li>
            <li>
              <p>comercial@agencia.com.br</p>
            </li>
          </ul>
        </li>{' '}
        <li className="grid gap-7 text-start justify-center md:pt-16">
          <ul className="flex flex-col md:gap-6">
            <li>
              <h3 className="text-primaryColor pt-2.5">MENU</h3>
            </li>
            <li>
              <div className="grid grid-cols-1">
                <Link
                  className=".text-xl hover:text-secondaryColorHover whitespace-nowrap"
                  href="/"
                >
                  Quem Somos
                </Link>
                <Link
                  className=".text-xl hover:text-secondaryColorHover whitespace-nowrap "
                  href="/"
                >
                  Cases
                </Link>
              </div>
            </li>
          </ul>
        </li>
        <li className="grid gap-7 text-start justify-center md:pt-16">
          <ul className="flex flex-col md:gap-6">
            <li>
              <h3 className="text-primaryColor pt-2.5">MENU</h3>
            </li>
            <li>
              <div className="grid grid-cols-1">
                <Link
                  className=".text-xl hover:text-secondaryColorHover whitespace-nowrap"
                  href="/"
                >
                  Quem Somos
                </Link>
                <Link
                  className=".text-xl hover:text-secondaryColorHover whitespace-nowrap "
                  href="/"
                >
                  Cases
                </Link>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="grid grid-cols-1 gap-6 justify-end text-start md:text-right">
            <li>
              <SelectLang />
            </li>
            <li>
              <h3 className="text-primaryColor pl-5">SOCIAL</h3>
            </li>
            <li>
              <ListIcons />
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
