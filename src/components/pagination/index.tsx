import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

interface PaginationProps {
  totalCount: number;
  onPage: number;
  nextPage: () => void;
  previwsPage: () => void;
}

export function Pagination({
  nextPage,
  previwsPage,
  onPage,
  totalCount,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / 10);

  return (
    <div className="flex items-center gap-6 lg:gap-8 m-auto">
      <div className="flex items-center gap-4">
        <Button
          onClick={() => previwsPage()}
          variant={`${onPage / 10 + 1 === 1 ? "outline" : "default"}`}
          className="h-10 w-12 p-0"
          disabled={onPage / 10 + 1 === 1}
        >
          <ChevronLeft className="h-5 w-h-5" />
        </Button>
        <span className="text-base font-semibold text-zinc-900">
          {`Página ${onPage / 10 + 1} de ${pages}`}
        </span>
        <Button
          onClick={() => nextPage()}
          variant="default"
          className="h-10 w-12 p-0"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
