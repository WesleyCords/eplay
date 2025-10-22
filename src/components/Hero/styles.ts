import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  display: block;
  height: 480px;
  width: 100%;
  position: relative;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  padding: 16px 0;

  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    content: '';
    background-color: rgba(0, 0, 0, 0.56);
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Infos = styled.div`
  padding: 16px;
  max-width: 290px;
  background-color: ${cores.preta};
  opacity: 0.8;
  border-radius: 8px;
  font-weight: bold;

  span {
    text-decoration: line-through;
  }

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;
  }
`
