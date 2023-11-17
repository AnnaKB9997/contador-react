import { useState } from 'react'

export default function MyAccountant() {

    const [counter, setCounter] = useState(0)

    function increase() {
        setCounter(counter + 1)
    }
    function reduce() {
        setCounter(counter - 1)
    }

    function reset() {
        setCounter(0)
    }


    return (
        <div>
            {counter < 0 ? <h1>O valor ficará negativo!</h1> : <h1>{counter}</h1>}
            <div className='group-button'>
                <button onClick={increase}>+</button>
                <button onClick={reset}>reset</button>
                <button onClick={reduce}>-</button>
            </div>
        </div>
    )
}