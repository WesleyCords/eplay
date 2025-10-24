import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  gap: 16px;
  height: 150px;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.76);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const Item = styled.li`
  position: relative;
  > img {
    border: 2px solid ${cores.branca};
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-weight: bold;
      font-size: 24px;
      color: ${cores.branca};
    }

    img {
      cursor: pointer;
    }
  }

  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
    margin-top: 16px;
  }

  iframe {
    height: 480px;
    border-radius: 8px;
    width: 900px;
  }
`
