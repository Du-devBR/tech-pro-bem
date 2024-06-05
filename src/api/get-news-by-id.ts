
import { baseUrl } from "@/config/variables"
import { NewsInterface } from "@/interfaces/news"

export async function getNewsById(params: number): Promise<NewsInterface>{
  const url = `${baseUrl}/${params}`
  const response = await fetch(url)
  if(!response.ok){
    throw new Error("Erro ao acessar api")
  }

  const results = await response.json()
  return results
}
