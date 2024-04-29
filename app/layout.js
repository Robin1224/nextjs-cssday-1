import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

const brut = localFont({
  src: [
    {
      path: './font/OTBrut-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/OTBrut-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-brut',
})

const f2049 = localFont({
  src: [
    {
      path: './font/OT2049-Black.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/OT2049-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/OT2049-Thin.woff2',
      weight: '200',
      style: 'normal',
    },
  ],
  variable: '--font-2049',
})

export const metadata = {
  title: "CSS Day",
  description: "CSS Day talks, speakers, and links",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={`${brut.variable} ${f2049.variable}`}>{children}</body>
      </StoreProvider>
    </html>
  );
}
