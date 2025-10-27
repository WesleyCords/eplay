//import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Game } from '../Home'

import { useGetGameQuery } from '../../services/api'
import { ErrorOrLoading } from '../../styles'

const Product = () => {
  const { id } = useParams<{ id: string }>()

  const { data: gameToId, isLoading } = useGetGameQuery(id!)

  if (isLoading) {
    return <h3>Carregando jogo com ID {id}...</h3>
  }

  if (gameToId) {
    return (
      <>
        <Hero game={gameToId} />
        <Section title="Sobre o jogo" background="black">
          <p>{gameToId.description}</p>
        </Section>
        <Section title="Mais detalhes" background="gray">
          <p>
            <b>Plataforma:</b>
            {gameToId.details.system}
            <br />
            <b>Desenvolvedor:</b> {gameToId.details.developer} <br />
            <b>Editora:</b>
            {gameToId.details.publisher}
            <br />
            <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
            {gameToId.details.languages.join(', ')}. As opções de áudio e
            legendas podem ser ajustadas nas configurações do jogo.
          </p>
        </Section>
        <Gallery
          items={gameToId.media.gallery}
          defaultCover={gameToId.media.cover}
          name={gameToId.name}
        />
      </>
    )
  }
  return <ErrorOrLoading>Jogo não encontrado.</ErrorOrLoading>
}

export default Product
