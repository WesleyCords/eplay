import { Imagem, Titulo, Precos } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home'
import { formatPrice } from '../ProductsList'

const Banner = () => {
  const [gameOfTheDay, setGameOfTheDay] = useState<Game>()

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/eplay/destaque')
      .then((res) => res.json())
      .then((data) => setGameOfTheDay(data))
  }, [])

  if (!gameOfTheDay) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${gameOfTheDay?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{gameOfTheDay.name}</Titulo>
          <Precos>
            De <span>{formatPrice(gameOfTheDay.price.discount)}</span> <br />
            por apenas {formatPrice(gameOfTheDay.price.actual)}
          </Precos>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
