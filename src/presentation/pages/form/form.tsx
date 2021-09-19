import { Container, Button } from '~/presentation/components'

const Form = () => {
  return (
    <Container>
      <h1 className="font-bold text-lg text-gray-900 text-center max-w-xs">
        Com qual frequência você vai ao supoermercado fazer compras?
      </h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-col mt-16 mb-10">
          <button className="text-sm w-40 uppercase font-light text-gray-800 border-2 border-green-500 mb-2 p-2">
            Uma vez ao mês
          </button>
          <button className="text-sm w-40 uppercase font-light text-gray-800 border-2 border-green-500 mb-2 p-2 text-  ">
            A cada 15 dias
          </button>
        </div>
        <Button href="/form">Próximo</Button>
      </div>
    </Container>
  )
}

export default Form
