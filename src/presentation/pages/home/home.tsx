import type { NextPage } from 'next'

import { Header, BannerSlider, Container } from '~/presentation/components'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Container>
        <BannerSlider />
      </Container>
    </>
  )
}

export default Home
