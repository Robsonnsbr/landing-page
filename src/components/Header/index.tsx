import Link from 'next/link';

export default function Header(props: { className: string }) {
  return (
    <header className={`${props.className} flex justify-center`}>
      <ul className="flex flex-col items-center md:grid grid-cols-4 w-full justify-between content-center">
        <li>
          <div>
            <h2 className="text-4xl text-left">agência</h2>
          </div>
        </li>
        <li className="m-auto col-span-2">
          <ul className="grid grid-cols-3 gap-1 w-full">
            <li>
              <div>
                <Link
                  className=".text-xl hover:text-secondaryColorHover"
                  href="/"
                >
                  Home
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link
                  className=".text-xl hover:text-secondaryColorHover whitespace-nowrap"
                  href="/"
                >
                  O que fazemos
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link
                  className=".text-xl hover:text-secondaryColorHover"
                  href="/"
                >
                  Cases
                </Link>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div className="flex md:justify-end">
            <Link href="/">
              <button
                className="text-base bg-secondaryColor hover:bg-secondaryColorHover h-12 w-52 rounded-md"
                type="button"
              >
                Fale conosco
              </button>
            </Link>
          </div>
        </li>
      </ul>
    </header>
  );
}
