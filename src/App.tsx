import { Outlet } from '@tanstack/react-router'
import './App.css'
import Header from './components/Header'

export const Root: React.FC = () => {
  return (
    <>
      <Header />
      <main className="mt-16 p-8">
        <Outlet />
      </main>
    </>
  )
}

export default Root 
