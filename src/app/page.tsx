import Card from "@/components/card";

interface ImageUrl {
  src: string;
  className?: string;
}
export interface Article extends ImageUrl {
  id: number;
  title?: string;
  url?: string;
  image_url?: string;
  news_site?: string;
  summary?: string;
  published_at?: Date;
  updated_at?: Date;
}

const data: Article[] = [
  {
    id: 0,
    title: "",
    news_site: "",
    published_at: new Date(),
    summary: "",
    updated_at: new Date(),
    url: "",
    src: "https://cdn.arstechnica.net/wp-content/uploads/2024/05/GettyImages-2151256730.jpg",
  },
  {
    id: 1,
    title: "",
    news_site: "",
    published_at: new Date(),
    summary: "",
    updated_at: new Date(),
    url: "",
    src: "https://cdn.arstechnica.net/wp-content/uploads/2024/05/GettyImages-2151256730.jpg",
  },
  {
    id: 2,
    title: "",
    news_site: "",
    published_at: new Date(),
    summary: "",
    updated_at: new Date(),
    url: "",
    src: "https://cdn.arstechnica.net/wp-content/uploads/2024/05/GettyImages-2151256730.jpg",
  },
  {
    id: 3,
    title: "",
    news_site: "",
    published_at: new Date(),
    summary: "",
    updated_at: new Date(),
    url: "",
    src: "https://cdn.arstechnica.net/wp-content/uploads/2024/05/GettyImages-2151256730.jpg",
  },
  {
    id: 4,
    title: "",
    news_site: "",
    published_at: new Date(),
    summary: "",
    updated_at: new Date(),
    url: "",
    src: "https://cdn.arstechnica.net/wp-content/uploads/2024/05/GettyImages-2151256730.jpg",
  },
  {
    id: 5,
    title: "",
    news_site: "",
    published_at: new Date(),
    summary: "",
    updated_at: new Date(),
    url: "",
    src: "https://cdn.arstechnica.net/wp-content/uploads/2024/05/GettyImages-2151256730.jpg",
  },
  {
    id: 6,
    title: "",
    news_site: "",
    published_at: new Date(),
    summary: "",
    updated_at: new Date(),
    url: "",
    src: "https://cdn.arstechnica.net/wp-content/uploads/2024/05/GettyImages-2151256730.jpg",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-8 my-12">
      <h1 className="text-3xl font-medium">As mais recentes</h1>
      <div className="w-full gap-4 grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1">
        {data.map((article: Article) => (
          <Card key={article.id} data={article} />
        ))}
      </div>
    </main>
  );
}
