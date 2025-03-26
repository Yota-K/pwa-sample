import { Outlet } from '@tanstack/react-router'
import { Sidebar } from './components/Sidebar'
import './App.css'

export const Root: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6 pt-20 lg:pt-6">
        <Outlet />
      </main>
    </div>
  )
}

export default Root 
