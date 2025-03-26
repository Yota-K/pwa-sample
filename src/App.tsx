import { Outlet } from '@tanstack/react-router'
import './App.css'

export const Root: React.FC = () => {
  return (
    <div className="app">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Root 
