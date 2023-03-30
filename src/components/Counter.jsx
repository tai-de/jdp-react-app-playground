import { useState } from 'react'
import Nav from './Nav'
import Button from './Button'

const Counter = (props) => {
  const [counter, setCounter] = useState(0)
  
  const decreaseCounter = () => {
    const current = counter
    setCounter(current - 1)
  }

  const increaseCounter = () => {
    const current = counter
    setCounter(current + 1)
  }

  return (
    <>
      <Nav />
      <div style={ { display: 'inline' } }>
        <Button onClick={decreaseCounter} name='-'/>
        <span style={ { padding: '2rem' } }>{counter}</span>
        <Button onClick={increaseCounter} name='+'/>
      </div>
    </>
  )
}

export default Counter