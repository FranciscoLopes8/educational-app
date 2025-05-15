export const metadata = {
  title: "EducaSinal - Aprenda Língua Gestual",
  description: "Aprenda Língua Gestual Portuguesa de forma fácil e acessível com o EducaSinal.",
}

import HomeClient from "@/components/home-client" // move o conteúdo client-side para este componente

export default function HomePage() {
  return <HomeClient />
}
