import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

export interface GalleryItem {
  type: 'image' | 'video'
  src: string
}

export type Game = {
  id: number
  name: string
  description: string
  releaseDate?: string
  price: {
    discount?: number
    actual?: number
    previous?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    cover: string
    gallery: GalleryItem[]
    thumbnail: string
  }
}

const Home = () => {
  const [promocoesList, setPromocoesList] = useState<Game[]>([])
  const [soonList, setSoonList] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/eplay/promocoes ')
      .then((res) => res.json())
      .then((data) => setPromocoesList(data))

    fetch('https://ebac-fake-api.vercel.app/eplay/em-breve ')
      .then((res) => res.json())
      .then((data) => setSoonList(data))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promocoesList} title="Promoções" background="gray" />
      <ProductsList games={soonList} title="Em breve" background="black" />
    </>
  )
}

export default Home
