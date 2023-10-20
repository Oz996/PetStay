import { Josefin_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Header from "@/components/Header";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={josefin.className}>
        <Provider>
          <Header />
          <main className="pt-24 container mx-auto">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
