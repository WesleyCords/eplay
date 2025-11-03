import { useDispatch } from 'react-redux'
import { Game } from '../../pages/Home'
import Button from '../Button'
import { formatPrice } from '../ProductsList'
import Tag from '../Tag'

import { add, open } from '../../store/reducers/cartSlice'

import { Banner, Infos } from './styles'

type HeroProps = {
  game: Game
}

const Hero = ({ game }: HeroProps) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          {game.prices.current && (
            <>
              <p>
                {game.prices.old && (
                  <span>De {formatPrice(game.prices.discount)}</span>
                )}
                por {formatPrice(game.prices.current)}
              </p>
              <Button
                title="Click here to add for Cart"
                type="button"
                variant="primary"
                onClick={addToCart}
              >
                Adicionar ao carrinho
              </Button>
            </>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
