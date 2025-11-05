import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchaseGameRequest = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner: {
        name: string
        document: string
      }
      name: string
      number: string
      expiry: {
        month: number
        year: number
      }
      code: number
    }
    installments: number
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeatureGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getSportsGames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getRPGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getFightGames: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    }),
    purchaseGame: builder.mutation<any, PurchaseGameRequest>({
      query: (purchaseData) => ({
        url: 'checkout',
        method: 'POST',
        body: purchaseData
      })
    })
  })
})

export default api
export const {
  useGetGameQuery,
  useGetSportsGamesQuery,
  useGetFightGamesQuery,
  useGetSimulationGamesQuery,
  useGetRPGamesQuery,
  useGetActionGamesQuery,
  useGetFeatureGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  usePurchaseGameMutation
} = api
