import { useState } from "react"
import { Button } from "~/components/ui/button"

export const Dictionary: React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Dictionary</h1>
      <Button onClick={() => setCount(prev => prev + 1)}>Click me</Button>
      <p>{count}</p>
    </div>
  )
} 
