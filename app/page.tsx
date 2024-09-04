import Image from "next/image"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import Search from "./_components/search"
import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"
import BookingItem from "./_components/booking-item"

const Home = async () => {
  const session = await getServerSession(authOptions)

  const confirmedBookings = session?.user
    ? await db.booking.findMany({
        where: {
          userId: (session.user as any).id,
          date: {
            gte: new Date(),
          },
        },
        include: {
          service: {
            include: {
              barbershop: true,
            },
          },
        },
        orderBy: {
          date: "asc",
        },
      })
    : []
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: { name: "desc" },
  })

  return (
    <div>
      <Header />
      <div className="p-5">
        {/* TEXT */}
        <h2 className="text-xl font-bold">Olá, Huann!</h2>
        <p>Terça-feira, 13 de agosto.</p>

        {/* SEARCH */}
        <div className="mt-6">
          <Search />
        </div>

        {/* FAST SEARCH */}
        <div className="mt-6 flex gap-3 overflow-x-scroll pb-3 scrollbar scrollbar-thumb-gray-700/50">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          ))}
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

        {/* CONFIRMED BOOKINGS */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          agendamentos
        </h2>
        <div className="flex gap-3 overflow-x-scroll pb-2 scrollbar scrollbar-thumb-gray-700/50">
          {confirmedBookings.map((booking) => (
            <BookingItem booking={booking} key={booking.id} />
          ))}
        </div>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          recomendados
        </h2>
        <div className="flex gap-4 overflow-x-scroll pb-2 scrollbar scrollbar-thumb-gray-700/50">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          populares
        </h2>
        <div className="flex gap-4 overflow-x-scroll pb-2 scrollbar scrollbar-thumb-gray-700/50">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Home
