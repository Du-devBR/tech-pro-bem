import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import QueryProvider from "@/provider/queryProvider]";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-NN",
  description: "Aqui temos as maios novas noticias no formato eletronico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="max-w-screen-xl m-auto max-xl:px-8 max-md:px-4">
          <QueryProvider>
            <Header />
            {children}
          </QueryProvider>
        </div>
      </body>
    </html>
  );
}
