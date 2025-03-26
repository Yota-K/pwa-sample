import { useState } from 'react'
import PWABadge from '../PWABadge'
import '../App.css'
import { Button } from '~/components/ui/button'

export const Home: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <h1>pwa-sample</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <PWABadge />
    </>
  )
} 
