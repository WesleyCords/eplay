import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'

const Product = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <Hero />
    </>
  )
}

export default Product
