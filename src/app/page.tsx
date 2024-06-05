"use client";
import { getNews } from "@/api/get-news";
import Card from "@/components/card";
import { Loader } from "@/components/loader";
import { Pagination } from "@/components/pagination";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";
export interface Article {
  id: number;
  title?: string;
  url?: string;
  image_url: string;
  news_site?: string;
  summary?: string;
  published_at?: Date;
  updated_at?: Date;
}

export default function Home() {
  const [offset, setOffset] = useState(0);
  const { data } = useSuspenseQuery({
    queryKey: ["news", offset],
    queryFn: () => getNews(offset),
  });

  return (
    <main className="flex flex-col gap-8 my-12">
      <h1 className="text-3xl font-medium">As mais recentes</h1>
      <Suspense fallback={<Loader />}>
        <div className="w-full gap-4 grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1">
          {data.results.map((article: Article) => (
            <Card key={article.id} data={article} />
          ))}
        </div>
        <Pagination
          onPage={offset}
          totalCount={data.count}
          nextPage={() => setOffset((old) => (data ? old + 10 : old))}
          previwsPage={() => setOffset((old) => Math.max(old - 10, 0))}
        />
      </Suspense>
    </main>
  );
}
