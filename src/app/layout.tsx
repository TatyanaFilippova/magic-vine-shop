import type { Metadata } from "next";
import LocalFont from "next/font/local";
import "../styles/globals.css";
import StyledComponentsRegistry from "./lib/registry";
import Providers from "./lib/providers";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "react-loading-skeleton/dist/skeleton.css";

const inter = LocalFont({
  src: [
    {
      path: "../../public/font/inglobal.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/inglobalb.ttf",
      weight: "bold",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Изделия из бумажной лозы ручной работы",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            {children}
            <Footer />
            <div id="modal" />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
