import { useState } from 'react'

const Nav = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false)
  const handleMenuClick = () => setIsOpened(true)
  const HamburgerMenu = () => (
    <button
      onClick={() => handleMenuClick()}
      className="outline-none mobile-menu-button"
    >
      <svg
        className="w-6 h-6 text-gray-500"
        x-show="!showMenu"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  )

  const MenuOpened = () => (
    <div className="mobile-menu">
      <ul className="">
        <li className="active">
          <a
            href="index.html"
            className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  )

  return (
    <>
      <nav className="hidden md:flex items-center">{children}</nav>
      <div className="md:hidden flex items-center">
        {!isOpened && <HamburgerMenu />}
        {isOpened && <MenuOpened />}
      </div>
    </>
  )
}
export default Nav
