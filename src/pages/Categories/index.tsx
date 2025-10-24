import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

const Categories = () => {
  const [gamesActions, setGamesActions] = useState<Game[]>([])
  const [gamesSports, setGamesSports] = useState<Game[]>([])
  const [gamesSimulation, setGamesSimulation] = useState<Game[]>([])
  const [gamedsRPG, setGamesRPG] = useState<Game[]>([])
  const [gamesFighting, setGamesFighting] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/eplay/acao')
      .then((response) => response.json())
      .then((data) => setGamesActions(data))
    fetch('https://ebac-fake-api.vercel.app/eplay/esportes')
      .then((response) => response.json())
      .then((data) => setGamesSports(data))
    fetch('https://ebac-fake-api.vercel.app/eplay/simulacao')
      .then((response) => response.json())
      .then((data) => setGamesSimulation(data))
    fetch('https://ebac-fake-api.vercel.app/eplay/rpg')
      .then((response) => response.json())
      .then((data) => setGamesRPG(data))
    fetch('https://ebac-fake-api.vercel.app/eplay/luta')
      .then((response) => response.json())
      .then((data) => setGamesFighting(data))
  }, [])

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

export default Categories
