import { useEffect, useState } from 'react'
import Counter from './Myaccountant'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <Counter />
    </div>

  )
}




