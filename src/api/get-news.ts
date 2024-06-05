import { baseUrl } from "@/config/variables"
import { NewsInterface } from "@/interfaces/news"

export async function getNews(offSet: number){
  const url = `${baseUrl}/?limit=10&offset=${offSet}`
  const response = await fetch(url)
  if(!response.ok){
    throw new Error("Erro ao acessar api")
  }

  const results = await response.json()
  return results
}
