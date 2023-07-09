import { useState } from 'react'

type Props = {
  initialCount?: number
}

const useCounter = ({ initialCount = 0 }: Props = {}) => {
  const [count, setCount] = useState<number>(initialCount)
  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  
  return {count, increment, decrement}
}

export default useCounter