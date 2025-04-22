import { Link } from '@tanstack/react-router'
import { CardHeader, CardContent } from './ui/card'

export const Header = () => {
  return (
    <CardHeader className="fixed top-0 left-0 right-0 z-10 border-t-0 shadow-md bg-white">
      <CardContent className="flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold">
          Sample App
        </Link>
      </CardContent>
    </CardHeader>
  )
}

export default Header 
