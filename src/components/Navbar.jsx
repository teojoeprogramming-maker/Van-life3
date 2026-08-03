import { Link } from "react-router-dom";

function Navbar(){
  return(
    <div id='Navbar'>
      <Link to='/' id='VANLIFELink'>#VANLIFE</Link>
      <Link to='/about' id='aboutNavbarLink'>About</Link>
      <Link to='/vans' id='vansLink'>Vans</Link>
    </div>
  );
}

export default Navbar;