import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(datePublished: string){
  const date = parseISO(datePublished)
  const formattedDate = format(date, "dd 'de' MMM 'de' yyyy", {locale: ptBR})

  return formattedDate
}
