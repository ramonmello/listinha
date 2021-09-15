import { Slider, SliderSettings, Banner } from '~/presentation/components'

import * as S from './banner-slider-styles'

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnFocus: true
}

const BannerSlider = () => (
  <S.Wrapper>
    <Slider settings={settings}>
      <Banner img="img/banner_principal_1.jpg" />
      <Banner img="img/banner_principal_2.jpg" />
      <Banner img="img/banner_principal_encontro.jpg" />
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
