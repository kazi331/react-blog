import logo from '../resources/dev.to.logo.png'
import {Link} from 'react-router-dom'
import { Avatar, Notification, Search } from '../resources/Icons'

function Navbar() {
  return (
    <div className='navbar'>
      <nav className='container'>
        <div className="start">
          <Link to="/"><img className='logo' src={logo} alt="" /></Link>
          <form className="search">
            <input autoComplete='off' placeholder='Search...' type="text" name="search" id="search" />
            <button type="submit"> <Search /> </button>
          </form>
        </div>
        <div className="end">
          <Link to="/write" className='crt'>Create Post</Link>
          <button className='noti'> <Notification /> </button>
          <button className='avatar'> <Avatar /> </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar