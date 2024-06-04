import Image from "next/image";
import { Article } from "../page";

const data: Article = {
  id: 0,
  title:
    "International Aid Arrives In Flood-Hit Libya As More Bodies Wash Ashore",
  news_site:
    "https://spacenews.com/online-calculator-helps-startups-navigate-the-regulatory-landscape/",
  published_at: new Date(),
  summary:
    "The Babar Azam-led Pakistan cricket team, despite a good start to the Asia Cup 2023, could not keep up the momentum and were knocked out of the Super 4 stage. The Pakistan team were pegged back by injuries of Haris Rauf and Naseem Shah too. ",
  updated_at: new Date(),
  url: "",
  src: "https://cdn.arstechnica.net/wp-content/uploads/2024/05/GettyImages-2151256730.jpg",
};

export default function NewsDetail() {
  return (
    <section className="flex flex-col my-12">
      <span className="text-sm text-zinc-600">{`Publicado em ${JSON.stringify(
        data.published_at
      )}`}</span>
      <h1 className="text-3xl text-zinc-900 font-semibold my-5">
        {data.title}
      </h1>
      <Image
        className="w-full"
        src={data.src}
        alt=""
        width={780}
        height={496}
      />
      <cite>
        <a
          className="text-sm text-zinc-900"
          target="_black"
          href={data.news_site}
        >
          {data.news_site}
        </a>
      </cite>
      <p className="text-xl text-zinc-9 font-medium my-5">{data.summary}</p>
      <button className="flex items-center justify-center p-4 text-base text-zinc-50 font-semibold bg-zinc-900 rounded-md cursor-pointer hover:shadow-xl hover:shadow-zinc-400 duration-500">
        <a target="_blanck" href={data.news_site}>
          Veja na integra
        </a>
      </button>
    </section>
  );
}
