import { cn } from "~/lib/utils"
import { Link } from "@tanstack/react-router"

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
    icon?: React.ReactNode
  }[]
}

export function Nav({ className, items, ...props }: NavProps) {
  return (
    <nav className={cn("space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className)} {...props}>
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
            "justify-start"
          )}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </nav>
  )
} 
