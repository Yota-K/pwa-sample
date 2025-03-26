import { Outlet } from '@tanstack/react-router'
import './App.css'

export const Root: React.FC = () => {
  return (
    <div className="flex h-screen">
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default Root 
