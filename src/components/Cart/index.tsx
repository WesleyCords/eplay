import Button from '../Button'

import {
  CartContainer,
  Overlay,
  CartAside,
  Prices,
  Quantity,
  CartItem
} from './styles'

import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cartSlice'
import { formatPrice } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const setTotalPrice = () => {
    return items.reduce((total, item) => total + (item.prices.current || 0), 0)
  }

  const removeFromCart = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <CartContainer opening={isOpen}>
      <Overlay onClick={closeCart} />
      <CartAside>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPrice(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeFromCart(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total de R$ {formatPrice(setTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button type="button" title="Click here for finally the buy">
          Finalizar Compra
        </Button>
      </CartAside>
    </CartContainer>
  )
}

export default Cart
