import type { Metadata } from 'next';
import { Fira_Code, Inter } from 'next/font/google';
import './globals.css';
const firaCode = Fira_Code({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

interface children {
  children: React.ReactNode;
}

const isValidFont = () => {
  if (firaCode) {
    return firaCode;
  }

  if (inter) {
    return inter;
  }
  console.log(new Error('Font is not valid'));
};

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Landing Page for leaning nextJs-14'
};

export default function RootLayout({ children }: children) {
  return (
    <html lang="pt-BR">
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body
        suppressHydrationWarning={true}
        className={isValidFont() ? isValidFont()?.className : 'font-sans'}
      >
        {children}
      </body>
    </html>
  );
}
