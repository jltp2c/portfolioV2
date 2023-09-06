import "../styles/globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Jean-Luc TAN",
  description: "PortFolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={quicksand.className}>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
