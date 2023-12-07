import Link from 'next/link';
import SelectLang from './SelectLang';

function Footer(props: { className: string }) {
  return (
    <footer className={`${props.className} flex justify-center`}>
      <ul className="grid grid-cols-4  w-full justify-between mt-16">
        <li>
          <div>
            <ul className="grid text-left gap-6">
              <li>
                <h2 className="text-5xl">agência</h2>
              </li>
              <li>
                <span>0800 800 800</span>
              </li>
              <li>
                <span>comercial@agencia.com.br</span>
              </li>
            </ul>
          </div>
        </li>
        <li className="grid gap-9 text-start m-auto">
          <h3 className="text-primaryColor">MENU</h3>
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
        <li className="grid gap-9 text-start m-auto">
          <h3 className="text-primaryColor">CONTEÚDO</h3>
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
        <li>
          <ul className="grid grid-cols-1 gap-6 justify-end text-right">
            <li>
              <SelectLang />
            </li>
            <li>
              <h3 className="text-primaryColor">SOCIAL</h3>
            </li>
            <li>
              <ul className="grid grid-cols-4">
                <li>
                  <Link
                    className=".text-xl hover:text-secondaryColorHover whitespace-nowrap"
                    href="/"
                  >
                    icon
                  </Link>
                </li>
                <li>
                  <Link
                    className=".text-xl hover:text-secondaryColorHover whitespace-nowrap"
                    href="/"
                  >
                    icon
                  </Link>
                </li>
                <li>
                  <Link
                    className=".text-xl hover:text-secondaryColorHover whitespace-nowrap"
                    href="/"
                  >
                    icon
                  </Link>
                </li>
                <li>
                  <Link
                    className=".text-xl hover:text-secondaryColorHover whitespace-nowrap"
                    href="/"
                  >
                    icon
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
