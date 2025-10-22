import { Container, Title } from './styles'

type SectionProps = {
  title: string
  children: React.ReactNode
  background: 'black' | 'gray'
}

const Section = ({ title, children, background }: SectionProps) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        {children}
      </div>
    </Container>
  )
}

export default Section
