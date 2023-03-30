import { Link } from 'react-router-dom'

const LinkButton = (props) => {
  return (
    <Link style={{padding: '1rem'}} to={props.target} className="link">{props.name}</Link>
  )
}

export default LinkButton