import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'

import { InputGroup, Row, TabButton } from './styles'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const getContentPayment = () => {
    if (!payWithCard) {
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          ad perferendis autem, veritatis, sit doloribus repellendus ullam nam
          ab voluptate numquam minima. Sit, rem quidem pariatur dolore
          praesentium ipsam repellat.
        </p>
      )
    }
    return (
      <>
        <Row>
          <InputGroup>
            <label htmlFor="card-name">Nome do titular do cartão</label>
            <input type="text" id="card-name" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cpfCardOwner">CPF do titular do cartao</label>
            <input type="text" id="cpfCardOwner" />
          </InputGroup>
        </Row>
        <Row marginTop="24px">
          <InputGroup>
            <label htmlFor="card-number">Número do Cartão</label>
            <input type="text" id="card-number" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="card-name">Nome impresso no cartão</label>
            <input type="text" id="card-name" />
          </InputGroup>
          <InputGroup maxWidth="123px">
            <label htmlFor="mes-venci">Mes de vencimento</label>
            <input type="text" id="mes-venci" />
          </InputGroup>
          <InputGroup maxWidth="123px">
            <label htmlFor="ano-venci">Ano de vencimento</label>
            <input type="text" id="ano-venci" />
          </InputGroup>
          <InputGroup maxWidth="48px">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" />
          </InputGroup>
        </Row>
        <Row marginTop="24px">
          <InputGroup maxWidth="150px">
            <label htmlFor="installments">Parcelamento</label>
            <select name="" id="">
              <option value="">1x de R$ 200,00</option>
              <option value="">2x de R$ 100,00</option>
              <option value="">4x de R$ 50,00</option>
            </select>
          </InputGroup>
        </Row>
      </>
    )
  }

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
        <TabButton
          active={payWithCard}
          type="button"
          onClick={() => setPayWithCard(true)}
        >
          Pagar com cartão
        </TabButton>
        <TabButton
          active={!payWithCard}
          type="button"
          onClick={() => setPayWithCard(false)}
        >
          Pagar com boleto
        </TabButton>
        <div className="margin-top">{getContentPayment()}</div>
      </Card>
      <Button title="Click here for finally buy" type="button">
        Finalizar Compra
      </Button>
    </div>
  )
}

export default Checkout
