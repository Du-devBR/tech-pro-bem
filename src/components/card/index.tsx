import Image from "next/image";
import { Article } from "@/app/page";
import Link from "next/link";

interface ArticleProps {
  data: Article;
}
export default function Card({ data }: ArticleProps) {
  return (
    <Link
      href={`${data.id}`}
      className="h-72 relative rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-black duration-500"
    >
      <Image
        className="w-full object-cover h-full "
        src={data.src}
        alt="ddd"
        width={500}
        height={500}
        loading="lazy"
      />
      <div className="flex flex-col gap-2 p-4 absolute bottom-0 bg-slate-400 bg-opacity-70">
        <h2 className="text-2xl font-medium">Titulo</h2>
        <p className="text-lg font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio,
          fugiat!
        </p>
      </div>
    </Link>
  );
}
