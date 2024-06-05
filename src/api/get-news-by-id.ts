
import { baseUrl } from "@/config/variables"

export async function getNewsById(params: number){
  const url = `${baseUrl}/${params}`
  const response = await fetch(url)
  if(!response.ok){
    throw new Error("Erro ao acessar api")
  }

  const results = await response.json()
  return results
}
