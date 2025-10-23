import Section from '../Section'

import { Items, Item, Action, Modal, ModalContent } from './styles'

import spiderMan from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/botao-play 1.png'
import zoom from '../../assets/images/mais-zoom 1.png'
import close from '../../assets/images/close.png'
import { useState } from 'react'

interface GalleryItem {
  type: 'image' | 'video'
  src: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    src: spiderMan
  },
  {
    type: 'image',
    src: hogwarts
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/zw47_q9wbBE?si=lIl6pJBVX-bhzTyk'
  }
]

type GalleryProps = {
  defaultCover: string
  name: string
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name }: GalleryProps) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    src: ''
  })

  const getMediaContent = (item: GalleryItem) => {
    if (item.type === 'image') return item.src
    return defaultCover
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((item, index) => (
            <Item
              key={index}
              onClick={() =>
                setModal({ type: item.type, src: item.src, isVisible: true })
              }
            >
              <img
                src={getMediaContent(item)}
                alt={`Midia da galeria ${name} - ${index + 1}`}
              />
              <Action>
                <img
                  src={item.type === 'video' ? play : zoom}
                  alt="Click here to open"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal
        onClick={() => setModal({ ...modal, isVisible: false })}
        className={modal.isVisible ? 'visible' : ''}
      >
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              onClick={() => setModal({ ...modal, isVisible: false })}
              src={close}
              alt="Fechar modal"
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.src} />
          ) : (
            <iframe frameBorder={0} src={modal.src} />
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Gallery
