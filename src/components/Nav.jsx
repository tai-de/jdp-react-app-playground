import LinkButton from './LinkButton'

const Nav = () => {
  return (
    <div style={ { display: 'inline' }}>
      <LinkButton target="/" name="Home" /> | 
      <LinkButton target="/goodbye" name="Goodbye" /> | 
      <LinkButton target="/counter" name="Counter" />
      <br /> <br />
    </div>
  )
}

export default Nav