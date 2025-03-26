import { Home, GraduationCap, LibraryBig  } from 'lucide-react'
import { Nav } from '~/components/ui/nav'
import { Separator } from '~/components/ui/separator'

const navigationItems = [
  {
    href: "/",
    title: "HOME",
    icon: <Home className="h-4 w-4" />,
  },
  {
    href: "/dictionary",
    title: "learning",
    icon: <GraduationCap className="h-4 w-4" />,
  },
  {
    href: "/learning",
    title: "Dictionary",
    icon: <LibraryBig className="h-4 w-4" />,
  },
]

export function Sidebar() {
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full flex-col gap-4">
        <div className="flex h-[60px] items-center px-6">
          <h2 className="text-lg font-semibold">PWA サンプル</h2>
        </div>
        <Separator />
        <div className="flex-1 px-3">
          <Nav items={navigationItems} />
        </div>
      </div>
    </div>
  )
} 
