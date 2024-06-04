import Card from "@/components/card";
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

export default async function Home() {
  const response = await fetch(
    "https://api.spaceflightnewsapi.net/v4/articles/"
  );
  const { results } = await response.json();
  return (
    <main className="flex flex-col gap-8 my-12">
      <h1 className="text-3xl font-medium">As mais recentes</h1>
      <div className="w-full gap-4 grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1">
        {results.map((article: Article) => (
          <Card key={article.id} data={article} />
        ))}
      </div>
    </main>
  );
}
