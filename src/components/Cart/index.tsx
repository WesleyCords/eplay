import Button from '../Button'

import {
  CartContainer,
  Overlay,
  CartAside,
  Prices,
  Quantity,
  CartItem
} from './styles'

import startWars from '../../assets/images/star_wars.png'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close } from '../../store/reducers/cartSlice'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  return (
    <CartContainer opening={isOpen}>
      <Overlay onClick={closeCart} />
      <CartAside>
        <ul>
          <CartItem>
            <img src={startWars} />
            <div>
              <h3>Nome do Jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={startWars} />
            <div>
              <h3>Nome do Jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Quantity>2 jogo(s) no carrinho</Quantity>
        <Prices>
          Total de R$ 250,00 <span>Em até 6x sem juros</span>
        </Prices>
        <Button type="button" title="Click here for finally the buy">
          Finalizar Compra
        </Button>
      </CartAside>
    </CartContainer>
  )
}

export default Cart
