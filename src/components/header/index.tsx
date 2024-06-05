import Image from "next/image";
import logo from "../../../public/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
export function Header() {
  return (
    <header className="flex items-center justify-between py-4 border-b-[1px] border-zinc-300">
      <div className="flex items-center gap-4 ">
        <Image
          className="max-w-72"
          src={logo}
          alt="Logotipo E-nn, background preto e desenho de oculos na cor branca."
        />
      </div>
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/9919?v=4" />
      </Avatar>
    </header>
  );
}
