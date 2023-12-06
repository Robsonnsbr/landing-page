import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>TESTE MAIN CSS {'=> ==='} const</h1>
        <>
          <button className="text-black bg-white">Botão</button>
          <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <a href="/">teste link</a>
          </ul>
        </>
      </main>
    </>
  );
}
