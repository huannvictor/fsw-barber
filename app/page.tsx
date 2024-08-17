import Image from "next/image"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        {/* TEXT */}
        <h2 className="text-xl font-bold">Olá, Huann!</h2>
        <p>Terça-feira, 13 de agosto.</p>

        {/* SEARCH */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* IMAGE */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="agende nos melhores com FSW barber"
            src="/banner-01.png"
            className="rounded-xl object-cover"
            fill
          />
        </div>

        {/* APPOINTMENT */}
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">20</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
