import Head from "next/head";
import "../styles/globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Jean-Luc TAN | Portfolio Personnel",
  description: "Portfolio",
  icons: {
    icon: ["/favicon.ico?=4"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={quicksand.className}>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
