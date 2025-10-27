import ProductsList from '../../components/ProductsList'
import { ErrorOrLoading } from '../../styles'

import {
  useGetRPGamesQuery,
  useGetActionGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery,
  useGetFightGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesActions } = useGetActionGamesQuery()
  const { data: gamesSports } = useGetSportsGamesQuery()
  const { data: gamesSimulation } = useGetSimulationGamesQuery()
  const { data: gamedsRPG } = useGetRPGamesQuery()
  const { data: gamesFighting } = useGetFightGamesQuery()

  if (
    gamesActions &&
    gamesSports &&
    gamesSimulation &&
    gamedsRPG &&
    gamesFighting
  ) {
    return (
      <>
        <ProductsList games={gamesActions} title="Ação" background="black" />
        <ProductsList games={gamesSports} title="Esportes" background="gray" />
        <ProductsList
          games={gamesSimulation}
          title="Simulação"
          background="black"
        />
        <ProductsList games={gamedsRPG} title="RPG" background="gray" />
        <ProductsList games={gamesFighting} title="Luta" background="black" />
      </>
    )
  }
  return <ErrorOrLoading>Carregando...</ErrorOrLoading>
}

export default Categories
