import type { NextPage } from 'next'

import { Container, Logo, Button } from '~/presentation/components'

const Home: NextPage = () => {
  return (
    <Container>
      <Logo className="mx-auto" />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-lg text-gray-900">
          Bem-vindo(a) ao ORGANZ!
        </h1>
        <p className="w-44 text-center text-gray-600 pb-14 pt-8">
          Organize sua rotina e torne a vida mais fácil. Inicie o teste e
          confira o que temos para você!
        </p>
        <Button href="/form">Iniciar</Button>
      </div>
    </Container>
  )
}
export default Home
