import {useState} from 'react';
import Nav from './Nav'

const Home = (props) => {
  const [input, setInput] = useState('')
  const [name, setName] = useState('stranger')

  return (
    <>
      <Nav />
      <div>Hello, {name}!</div>
      <p>This is my React app</p>
      <div style={{display: 'inline'}}>
        <label>Your name: </label>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => {setName(input)}}>Save</button>
        <button onClick={() => {setName('stranger'); setInput('')}}>Reset</button>
      </div>
    </>
  )
}

export default Home