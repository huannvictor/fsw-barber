import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarDaysIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" height={18} width={120} alt="logo" />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center gap-3 border-b border-solid py-5">
              <Avatar>
                <AvatarImage src="https://github.com/huannvictor.png" />
              </Avatar>

              <div>
                <p className="font-bold">Huann Almeida</p>
                <p className="text-xs">huann.dev@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid py-5">
              <SheetClose asChild>
                <Button
                  className="justify-start gap-2"
                  variant={"ghost"}
                  asChild
                >
                  <Link href={"/"}>
                    <HomeIcon size={18} />
                    Início
                  </Link>
                </Button>
              </SheetClose>

              <Button className="justify-start gap-2" variant={"ghost"}>
                <CalendarDaysIcon size={18} />
                Agendamentos
              </Button>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid py-5">
              {quickSearchOptions.map((option) => (
                <Button
                  key={option.title}
                  className="justify-start gap-2"
                  variant={"ghost"}
                >
                  <Image
                    src={option.imageUrl}
                    alt={option.title}
                    height={18}
                    width={18}
                  />
                  {option.title}
                </Button>
              ))}
            </div>

            <div className="flex flex-col gap-2 py-5">
              <Button className="justify-start gap-2" variant={"ghost"}>
                <LogOutIcon size={18} />
                Sair da Conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
