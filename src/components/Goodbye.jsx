import {useState, useEffect} from 'react'
import Nav from './Nav'

const getTime = () => new Date().toUTCString()

const Goodbye = (props) => {
  const [time, setTime] = useState(getTime())

  useEffect(() => {
    setTimeout(() => {
      setTime(getTime())
    }, 3000)
  })

  return (
    <>
      <Nav />
      <div>Goodbye</div>
      <p>L8r @ {time}</p>
    </>
  )
}

export default Goodbye