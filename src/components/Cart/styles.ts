import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

import close from '../../assets/images/close.png'

type CartContainerProps = {
  opening: boolean
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`

export const CartContainer = styled.div<CartContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.opening ? 'flex' : 'none')};
  justify-content: flex-end;
  z-index: 1;
`

export const CartAside = styled.aside`
  background-color: ${cores.cinza};
  z-index: 2;
  padding: 40px 16px;
  max-width: 23vw;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${cores.branca};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }
`

export const Quantity = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.branca};
  margin: 32px 0 16px 0;
`

export const CartItem = styled.li`
  display: flex;
  gap: 24px;
  border-bottom: 1px solid ${cores.cinzaClaro};
  padding: 8px 0;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${cores.branca};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.branca};
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8;
    right: 0;

    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`
