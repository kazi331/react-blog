import logo from '../resources/dev.to.logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar, Notification, Search } from '../resources/Icons'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'

function Navbar() {
  const [navShadow, setNavShadow] = useState(false)
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(AuthContext)
  // console.log(currentUser)
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
          {currentUser && <div className="user">
            <span>{currentUser.username}</span>
            <button className='crt' onClick={logout} >Logout</button>
          </div>}
          <button onClick={() => navigate('/login')} className='avatar'> <Avatar /> </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar