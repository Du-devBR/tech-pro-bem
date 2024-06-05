"use client";
import Image from "next/image";
import { Article } from "../page";
import { Button } from "@/components/ui/button";
import { getNewsById } from "@/api/get-news-by-id";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "@/lib/formatDate";

interface InfoParams {
  params: {
    newsId: number;
  };
}
export default function NewsDetail({ params }: InfoParams) {
  const { data, isPending } = useQuery({
    queryKey: ["news", params],
    queryFn: () => getNewsById(params.newsId),
  });

  if (isPending) {
    return <p>...carregando</p>;
  }

  return (
    <section className="flex flex-col my-12">
      <span className="text-sm text-zinc-600">{`Publicado em ${formatDate(
        data.published_at
      )}`}</span>
      <h1 className="text-3xl text-zinc-900 font-semibold my-5">
        {data.title}
      </h1>
      <Image
        className="w-full"
        src={data.image_url}
        alt=""
        width={780}
        height={496}
      />
      <cite>
        <a className="text-sm text-zinc-900" target="_black" href={data.url}>
          {data.url}
        </a>
      </cite>
      <p className="text-xl text-zinc-9 font-medium my-5">{data.summary}</p>
      <Button variant="default" className="p-8 bg-zinc-900 duration-500">
        <a target="_blanck" href={data.url}>
          Veja na integra
        </a>
      </Button>
    </section>
  );
}
