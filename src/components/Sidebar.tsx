import { Menu } from 'lucide-react'
import { Home, Book, GraduationCap } from 'lucide-react'
import { Nav } from '~/components/ui/nav'
import { Separator } from '~/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet'
import { Button } from '~/components/ui/button'

const navigationItems = [
  {
    href: "/",
    title: "Home",
    icon: <Home className="h-4 w-4" />,
  },
  {
    href: "/dictionary",
    title: "Dictionary",
    icon: <Book className="h-4 w-4" />,
  },
  {
    href: "/learning",
    title: "Learning",
    icon: <GraduationCap className="h-4 w-4" />,
  },
]

const SidebarContent = () => {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex h-[60px] items-center px-6">
        <h2 className="text-lg font-semibold">PWA Sample</h2>
      </div>
      <Separator />
      <div className="flex-1 px-3">
        <Nav items={navigationItems} />
      </div>
    </div>
  )
}

export function Sidebar() {
  return (
    <>
      {/* モバイル用のハンバーガーメニュー */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline" size="icon" className="absolute left-4 top-4">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[280px]">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* デスクトップ用の固定サイドバー */}
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="w-[240px]">
          <SidebarContent />
        </div>
      </div>
    </>
  )
} 
