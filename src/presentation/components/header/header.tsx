import { Container } from '~/presentation/components'

import { NavItem, Nav } from './components'

const Header = () => (
  <div className="h-24 shadow-md mb-10">
    <Container className="flex items-center justify-between text-base">
      <img src="img/logo.png" />
      <Nav>
        <NavItem>A Nestlé</NavItem>
        <NavItem>O programa</NavItem>
        <button className="mr-3 bg-red-400 p-3 rounded-md text-white font-bold transition duration-500 hover:bg-red-500">
          Inscreva-se
        </button>
        <NavItem>Fale conosco</NavItem>
      </Nav>
    </Container>
  </div>
)

export default Header
