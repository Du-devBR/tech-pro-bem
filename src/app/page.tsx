"use client";
import { getNews } from "@/api/get-news";
import Card from "@/components/card";
import { Loader } from "@/components/loader";
import { Pagination } from "@/components/pagination";
import { NewsInterface } from "@/interfaces/news";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";

export default function Home() {
  const [offset, setOffset] = useState(0);
  const { data } = useSuspenseQuery({
    queryKey: ["news", offset],
    queryFn: () => getNews(offset),
  });

  return (
    <main className="flex flex-col gap-8 my-12 max-sm:my-8">
      <h1 className="text-3xl max-sm:text-2xl font-medium">As mais recentes</h1>
      <Suspense fallback={<Loader />}>
        <div className="w-full gap-4 grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1">
          {data.results.map((article: NewsInterface) => (
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
