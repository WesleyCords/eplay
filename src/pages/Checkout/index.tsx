import Button from '../../components/Button'
import Card from '../../components/Card'

import { InputGroup, Row } from './styles'

const Checkout = () => {
  return (
    <div className="container">
      <Card title="Dados de Cobrança">
        <Row>
          <InputGroup>
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" />
          </InputGroup>
        </Row>
        <h3 className="margin-top">Dados de entrega - conteudo digital</h3>
        <Row>
          <InputGroup>
            <label htmlFor="delivery-email">E-mail</label>
            <input type="text" id="delivery-email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="confimed-email">Confirme o email</label>
            <input type="email" id="email" />
          </InputGroup>
        </Row>
      </Card>
      <Card title="Dados de Pagamento">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            ad perferendis autem, veritatis, sit doloribus repellendus ullam nam
            ab voluptate numquam minima. Sit, rem quidem pariatur dolore
            praesentium ipsam repellat.
          </p>
        </div>
      </Card>
      <Button title="Click here for finally buy" type="button">
        Finalizar Compra
      </Button>
    </div>
  )
}

export default Checkout
