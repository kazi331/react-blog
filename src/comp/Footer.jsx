import { FooterImage } from '../resources/Icons'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>DEV Community 👩‍💻👨‍💻 — A constructive and inclusive social network for software developers. With you every step of your journey.</p>
        <p>Built on Forem — the open source software that powers DEV and other inclusive communities.</p>
        <p>Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2022.</p>
        <FooterImage />
      </div>
    </footer>
  )
}

export default Footer