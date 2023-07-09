import { useState } from 'react'

type Props = {}

const Counter = (props: Props) => {
  const [count, setCount] = useState<number>(0)
  const [amount, setAmount] = useState<number>(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <input type="number" name='amount' value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  )
}

export default Counter