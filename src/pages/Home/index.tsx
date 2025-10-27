import { useState } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

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
  const { data: onSale = [] } = useGetOnSaleQuery()
  const { data: soonList = [] } = useGetSoonQuery()

  if (onSale && soonList) {
    return (
      <>
        <Banner />
        <ProductsList games={onSale} title="Promoções" background="gray" />
        <ProductsList games={soonList} title="Em breve" background="black" />
      </>
    )
  }

  return <div>Loading...</div>
}

export default Home
