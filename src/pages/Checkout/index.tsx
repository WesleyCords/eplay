import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'

import { InputGroup, Row, TabButton } from './styles'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { usePurchaseGameMutation } from '../../services/api'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data }] = usePurchaseGameMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmEmail: '',
      cardName: '',
      cpfCardOwner: '',
      cardNumber: '',
      cardPrintedName: '',
      expiryMonth: '',
      expiryYear: '',
      cvv: '',
      installments: 1
    },
    validationSchema: yup.object({
      fullName: yup
        .string()
        .min(5, 'Precisa ter no minimo 5 caracteres')
        .required('Campo obrigatório'),
      email: yup
        .string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      cpf: yup
        .string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .required('Campo obrigatório'),
      deliveryEmail: yup
        .string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
      confirmEmail: yup
        .string()
        .oneOf([yup.ref('deliveryEmail')], 'E-mails não conferem')
        .required('Campo obrigatório'),

      cardName: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('Campo obrigatorio') : schema
        ),
      cpfCardOwner: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('Campo obrigatorio') : schema
        ),
      cardNumber: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('Campo obrigatorio') : schema
        ),
      cardPrintedName: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('Campo obrigatorio') : schema
        ),
      expiryMonth: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('Campo obrigatorio') : schema
        ),
      expiryYear: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('Campo obrigatorio') : schema
        ),
      cvv: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('Campo obrigatorio') : schema
        ),
      installments: yup
        .number()
        .when((values, schema) =>
          payWithCard ? schema.required('Campo obrigatorio') : schema
        )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          card: {
            active: payWithCard,
            owner: {
              name: values.cardName,
              document: values.cpfCardOwner
            },
            name: values.cardPrintedName,
            number: values.cardNumber,
            expiry: {
              month: Number(values.expiryMonth),
              year: Number(values.expiryYear)
            },
            code: Number(values.cvv)
          },
          installments: Number(values.installments)
        },
        products: [{ id: 1, price: 200 }]
      })
    }
  })

  const getErrorMessage = (field: string, message?: string) => {
    const hasChanged = field in form.touched
    const hasError = field in form.errors

    if (hasChanged && hasError) {
      return message
    }
    return ''
  }

  const handleSumbit = () => {
    if (items.length > 0) {
      form.handleSubmit()
    } else {
      alert('Seu carrinho está vazio!')
    }
  }

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
            <label htmlFor="cardName">Nome do titular do cartão</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={form.values.cardName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cardName', form.errors.cardName)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="cpfCardOwner">CPF do titular do cartao</label>
            <input
              type="text"
              id="cpfCardOwner"
              name="cpfCardOwner"
              value={form.values.cpfCardOwner}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('cpfCardOwner', form.errors.cpfCardOwner)}
            </small>
          </InputGroup>
        </Row>
        <Row marginTop="24px">
          <InputGroup>
            <label htmlFor="cardNumber">Número do Cartão</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={form.values.cardNumber}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('cardNumber', form.errors.cardNumber)}
            </small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="cardPrintedName">Nome impresso no cartão</label>
            <input
              type="text"
              id="cardPrintedName"
              name="cardPrintedName"
              value={form.values.cardPrintedName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('cardPrintedName', form.errors.cardPrintedName)}
            </small>
          </InputGroup>
          <InputGroup maxWidth="123px">
            <label htmlFor="expiryMonth">Mes de vencimento</label>
            <input
              type="text"
              id="expiryMonth"
              name="expiryMonth"
              value={form.values.expiryMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('expiryMonth', form.errors.expiryMonth)}
            </small>
          </InputGroup>
          <InputGroup maxWidth="123px">
            <label htmlFor="exprityYear">Ano de vencimento</label>
            <input
              type="text"
              id="expiryYear"
              name="expiryYear"
              value={form.values.expiryYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
          </InputGroup>
          <InputGroup maxWidth="48px">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={form.values.cvv}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
          </InputGroup>
        </Row>
        <Row marginTop="24px">
          <InputGroup maxWidth="150px">
            <label htmlFor="installments">Parcelamento</label>
            <select
              name="installments"
              id="installments"
              value={form.values.installments}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            >
              <option value="">1x de R$ 200,00</option>
              <option value="">2x de R$ 100,00</option>
              <option value="">4x de R$ 50,00</option>
            </select>
            <small>
              {getErrorMessage('installments', form.errors.installments)}
            </small>
          </InputGroup>
        </Row>
      </>
    )
  }

  return (
    <div className="container">
      {data ? (
        <Card title="Muito obrigado">
          <p>
            É com satisfação que informamos que recebemos seu pedido com
            sucesso!
            <br />
            Abaixo estão os detalhes da sua compra: <br /> Número do pedido:
            {data.orderId} <br /> Forma de pagamento:{' '}
            {payWithCard ? 'Cartão de Crédito' : 'Boleto Bancário'}
          </p>
          <p className="margin-top">
            Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
            que a confirmação pode levar até 3 dias úteis. Após a aprovação do
            pagamento, enviaremos um e-mail contendo o código de ativação do
            jogo.
          </p>
          <p className="margin-top">
            Se você optou pelo pagamento com cartão de crédito, a liberação do
            código de ativação ocorrerá após a aprovação da transação pela
            operadora do cartão. Você receberá o código no e-mail cadastrado em
            nossa loja.
          </p>
          <p className="margin-top">
            Pedimos que verifique sua caixa de entrada e a pasta de spam para
            garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
            necessite de mais informações, por favor, entre em contato conosco
            através dos nossos canais de atendimento ao cliente.
          </p>
          <p className="margin-top">
            Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
            jogo!
          </p>
        </Card>
      ) : (
        <form onSubmit={handleSumbit} className="container">
          <Card title="Dados de Cobrança">
            <Row>
              <InputGroup>
                <label htmlFor="fullName">Nome Completo</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('fullName', form.errors.fullName)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('email', form.errors.email)}</small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={form.values.cpf}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
              </InputGroup>
            </Row>
            <h3 className="margin-top">Dados de entrega - conteudo digital</h3>
            <Row>
              <InputGroup>
                <label htmlFor="deliveryEmail">E-mail</label>
                <input
                  type="text"
                  id="deliveryEmail"
                  name="deliveryEmail"
                  value={form.values.deliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="confirmEmail">Confirme o email</label>
                <input
                  type="email"
                  id="confirmEmail"
                  name="confirmEmail"
                  value={form.values.confirmEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('confirmEmail', form.errors.confirmEmail)}
                </small>
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
        </form>
      )}
    </div>
  )
}

export default Checkout
