import logo from '../resources/dev.to.logo.png'
import { Link } from 'react-router-dom'
import { Avatar, Notification, Search } from '../resources/Icons'
import { useEffect, useState } from 'react'

function Navbar() {
  const [navShadow, setNavShadow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setNavShadow('navshadow') : setNavShadow(false)
    })
  }, [])
  return (
    <div className={`navbar ${navShadow && 'navshadow'}`}>
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