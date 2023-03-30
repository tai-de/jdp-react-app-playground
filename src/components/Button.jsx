const buttonStyle = {
  height: '2rem',
  width: '2rem',
  margin: '0 10px',
  color: 'white',
  background: 'transparent',
  border: '1px solid white',
  fontSize: '1.5rem',
}

const Button = (props) => {
  const { name, onClick } = props;
  return (
    <button style={buttonStyle} onClick={onClick}>{name}</button>
  )
}

export default Button