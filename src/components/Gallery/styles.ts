import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  gap: 16px;
  height: 150px;
`

export const Item = styled.li`
  img {
    border: 2px solid ${cores.branca};
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
