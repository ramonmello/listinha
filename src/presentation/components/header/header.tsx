import { Container } from '~/presentation/components'

import { NavItem, Nav } from './components'

const Header = () => (
  <div className="shadow-md mb-10">
    <Container className="flex items-center justify-between text-base h-24">
      <img src="img/logo.png" />
      <Nav>
        <NavItem>A Nestlé</NavItem>
        <NavItem>O programa</NavItem>
        <button className="bg-pink-500 mr-3 p-3 rounded-md text-white font-bold transition duration-500 hover:bg-red-500">
          Inscreva-se
        </button>
        <NavItem>Fale conosco</NavItem>
      </Nav>
    </Container>
  </div>
)

export default Header
