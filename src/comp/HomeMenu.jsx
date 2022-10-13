import React from 'react'
import { Avatar } from '../resources/Icons'
import MenuItem from './MenuItem'

const HomeMenu = () => {
  return (
    <div className='home-menu'>
      <section className='categories'>
        <MenuItem to="?cat=react" icon={<Avatar />} title="React" />
        <MenuItem to="?cat=javascript" icon={<Avatar />} title="Javascript" />
        <MenuItem to="?cat=nodejs" icon={<Avatar />} title="Node js" />
        <MenuItem to="?cat=mongodb" icon={<Avatar />} title="MongoDB" />
        <MenuItem to="?cat=nextjs" icon={<Avatar />} title="Next js" />
        <MenuItem to="?cat=webdev" icon={<Avatar />} title="WebDev" />
        <MenuItem to="?cat=career" icon={<Avatar />} title="Career" />
        <MenuItem to="?cat=programming" icon={<Avatar />} title="Programming" />
        <MenuItem to="?cat=beginners" icon={<Avatar />} title="Beginners" />
        <MenuItem to="?cat=guide" icon={<Avatar />} title="Guides" />
        <MenuItem to="/tags" icon={<Avatar />} title="Tags" />
        <MenuItem to="/faq" icon={<Avatar />} title="FAQs" />
        <MenuItem to="/sponsors" icon={<Avatar />} title="Sponsors" />
        <MenuItem to="/about" icon={<Avatar />} title="About" />
        <MenuItem to="/contact" icon={<Avatar />} title="Contact" />
      </section>
      <section className='others'></section>
      <section className='social-icons'></section>
      <section className='tags'></section>
      <section className='cards'></section>
    </div>
  )
}

export default HomeMenu