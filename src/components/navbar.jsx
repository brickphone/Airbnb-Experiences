import airbnblogo from './Pictures/airbnblogo.png'

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img src={airbnblogo} className='logo'></img>
    </nav>
  )
}

export default Navbar;