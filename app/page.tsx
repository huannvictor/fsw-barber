import Image from "next/image"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Huann!</h2>
        <p>Terça-feira, 13 de agosto de 2024</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative h-[150] w-full">
          <Image
            alt="banner"
            src="/banner-01.png"
            className="object-cover"
            fill
          />
        </div>
      </div>
    </div>
  )
}
