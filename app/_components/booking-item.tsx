import { Prisma } from "@prisma/client"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { format, isFuture } from "date-fns"
import { ptBR } from "date-fns/locale"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import Image from "next/image"

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: {
        include: {
          barbershop: true
        }
      }
    }
  }>
}

//TODO: receber agendamento como propriedade

const BookingItem = ({ booking }: BookingItemProps) => {
  const {
    service: { barbershop },
  } = booking
  const isConfirmed = isFuture(booking.date)

  return (
    <Sheet>
      <SheetTrigger asChild className="w-full cursor-pointer">
        <Card className="min-w-[90%]">
          <CardContent className="flex justify-between p-0">
            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge
                className="w-fit"
                variant={isConfirmed ? "default" : "secondary"}
              >
                {isConfirmed ? "Confirmado" : "Finalizado"}
              </Badge>
              <h3 className="font-semibold">{booking.service.name}</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={booking.service.barbershop.imageUrl} />
                </Avatar>
                <p className="text-sm">{booking.service.barbershop.name}</p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm capitalize">
                {format(booking.date, "MMMM", { locale: ptBR })}
              </p>
              <p className="text-2xl">{format(booking.date, "dd")}</p>
              <p className="text-sm">{format(booking.date, "HH:mm")}</p>
            </div>
          </CardContent>
        </Card>
      </SheetTrigger>

      <SheetContent className="w-[90%]">
        <SheetHeader>
          <SheetTitle>Informações da Reserva</SheetTitle>
        </SheetHeader>

        <div className="relative h-[180px] w-full">
          <Image
            alt={`mapa da barbearia ${barbershop.name}`}
            src={"/fsw-map.png"}
            fill
            className="object-cover"
          />

          <Card>
            <CardContent>
              <Avatar>
                <AvatarImage src={barbershop.imageUrl} />
              </Avatar>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default BookingItem
