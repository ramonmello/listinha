import styled from 'styled-components'

export const Wrapper = styled.section`
  .slick-dots {
    padding-top: 1.4rem;
    list-style: none;
    display: flex !important;
    justify-content: center;

    li {
      background: #d2d2d2;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0.8rem;
      cursor: pointer;

      &.slick-active {
        background: #f87171;
      }
    }

    button {
      opacity: 0;
      width: 1.2rem;
      height: 1.2rem;
      cursor: pointer;
    }
  }
`
