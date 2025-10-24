import { Game } from '../../pages/Home'
import Button from '../Button'
import { formatPrice } from '../ProductsList'
import Tag from '../Tag'

import { Banner, Infos } from './styles'

type HeroProps = {
  game: Game
}

const Hero = ({ game }: HeroProps) => {
  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          {game.price.actual && (
            <>
              <p>
                {game.price.previous && (
                  <span>De {formatPrice(game.price.discount)}</span>
                )}
                por {formatPrice(game.price.actual)}
              </p>
              <Button
                title="Click here to add for Cart"
                type="button"
                variant="primary"
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
