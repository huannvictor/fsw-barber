import { Card, CardContent } from "./ui/card"

const footer = () => {
  return (
    <footer>
      <Card className="px-5 py-6">
        <CardContent>
          <p className="text-sm text-gray-400">
            © 2024 Copyright <span className="font-bold">FSW Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default footer
