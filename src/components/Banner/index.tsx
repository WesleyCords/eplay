import { Imagem, Titulo, Precos } from './styles'
import { ErrorOrLoading } from '../../styles'
import Tag from '../Tag'
import Button from '../Button'
import { formatPrice } from '../ProductsList'

import { useGetFeatureGameQuery } from '../../services/api'

const Banner = () => {
  const { data: gameOfTheDay, error, isLoading } = useGetFeatureGameQuery()

  if (isLoading) {
    return <ErrorOrLoading>Carregando...</ErrorOrLoading>
  }

  if (error || !gameOfTheDay) {
    return (
      <ErrorOrLoading>
        {error && 'Not found never with query of the API'}
      </ErrorOrLoading>
    )
  }

  return (
    <Imagem style={{ backgroundImage: `url(${gameOfTheDay?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{gameOfTheDay.name}</Titulo>
          <Precos>
            De <span>{formatPrice(gameOfTheDay.prices.old)}</span> <br />
            por apenas {formatPrice(gameOfTheDay.prices.current)}!
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${gameOfTheDay.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
