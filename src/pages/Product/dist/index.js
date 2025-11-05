'use strict'
exports.__esModule = true
//import { useParams } from 'react-router-dom'
var Hero_1 = require('../../components/Hero')
var Section_1 = require('../../components/Section')
var Gallery_1 = require('../../components/Gallery')
var react_router_dom_1 = require('react-router-dom')
var api_1 = require('../../services/api')
var styles_1 = require('../../styles')
var Product = function () {
  var id = react_router_dom_1.useParams().id
  var _a = api_1.useGetGameQuery(id),
    gameToId = _a.data,
    isLoading = _a.isLoading
  if (isLoading) {
    return React.createElement('h3', null, 'Carregando jogo com ID ', id, '...')
  }
  if (gameToId) {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Hero_1['default'], { game: gameToId }),
      React.createElement(
        Section_1['default'],
        { title: 'Sobre o jogo', background: 'black' },
        React.createElement('p', null, gameToId.description)
      ),
      React.createElement(
        Section_1['default'],
        { title: 'Mais detalhes', background: 'gray' },
        React.createElement(
          'p',
          null,
          React.createElement('b', null, 'Plataforma:'),
          gameToId.details.system,
          React.createElement('br', null),
          React.createElement('b', null, 'Desenvolvedor:'),
          ' ',
          gameToId.details.developer,
          ' ',
          React.createElement('br', null),
          React.createElement('b', null, 'Editora:'),
          gameToId.details.publisher,
          React.createElement('br', null),
          React.createElement('b', null, 'Idiomas:'),
          ' O jogo oferece suporte a diversos idiomas, incluindo',
          gameToId.details.languages.join(', '),
          '. As op\u00E7\u00F5es de \u00E1udio e legendas podem ser ajustadas nas configura\u00E7\u00F5es do jogo.'
        )
      ),
      React.createElement(Gallery_1['default'], {
        items: gameToId.media.gallery,
        defaultCover: gameToId.media.cover,
        name: gameToId.name
      })
    )
  }
  return React.createElement(
    styles_1.ErrorOrLoading,
    null,
    'Jogo n\u00E3o encontrado.'
  )
}
exports['default'] = Product
