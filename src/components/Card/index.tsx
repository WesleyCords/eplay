import { Container } from './styles'

type CardProps = {
  children?: React.ReactNode
  title: string
}

const Card = ({ title, children }: CardProps) => {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}

export default Card
