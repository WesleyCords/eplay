import Section from '../Section'

import { Items, Item } from './styles'

import zelda from '../../assets/images/banner-homem-aranha.png'

const Gallery = () => {
  return (
    <Section title="Galeria" background="black">
      <Items>
        <Item>
          <img src={zelda} alt="Zelda teste" />
        </Item>
        <Item>
          <img src={zelda} alt="Zelda teste" />
        </Item>
        <Item>
          <img src={zelda} alt="Zelda teste" />
        </Item>
        <Item>
          <img src={zelda} alt="Zelda teste" />
        </Item>
      </Items>
    </Section>
  )
}

export default Gallery
