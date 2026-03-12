import { Link } from "react-router-dom"

export default function Navbar(){

  return(
    <nav style={{display:"flex",gap:20}}>
      <Link to="/">Projects</Link>
      <Link to="/new">New Project</Link>
    </nav>
  )
}