import type { NextPage } from 'next'

import { Container, Logo, Button } from '~/presentation/components'

const Home: NextPage = () => {
  return (
    <Container className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col justify-between h-80">
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
      </div>
    </Container>
  )
}

export default Home
