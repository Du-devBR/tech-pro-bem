import Image from "next/image";
import logo from "../../../public/logo.png";
export function Header() {
  return (
    <header>
      <div className="flex items-center gap-4 py-8">
        <Image
          className="w-20"
          src={logo}
          alt="Logotipo E-nn, background preto e desenho de oculos na cor branca."
        />
        <div className="flex flex-col">
          <span className="text-3xl font-bold">E-NN</span>
          <span className="text-xl font-light text-zinc-700">
            Suas noticias estão aqui!
          </span>
        </div>
      </div>
    </header>
  );
}
