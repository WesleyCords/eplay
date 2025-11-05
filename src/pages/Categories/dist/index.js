'use strict'
exports.__esModule = true
var ProductsList_1 = require('../../components/ProductsList')
var styles_1 = require('../../styles')
var api_1 = require('../../services/api')
var Categories = function () {
  var gamesActions = api_1.useGetActionGamesQuery().data
  var gamesSports = api_1.useGetSportsGamesQuery().data
  var gamesSimulation = api_1.useGetSimulationGamesQuery().data
  var gamedsRPG = api_1.useGetRPGamesQuery().data
  var gamesFighting = api_1.useGetFightGamesQuery().data
  if (
    gamesActions &&
    gamesSports &&
    gamesSimulation &&
    gamedsRPG &&
    gamesFighting
  ) {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(ProductsList_1['default'], {
        games: gamesActions,
        title: 'A\u00E7\u00E3o',
        background: 'black',
        id: 'action'
      }),
      React.createElement(ProductsList_1['default'], {
        games: gamesSports,
        title: 'Esportes',
        background: 'gray',
        id: 'sports'
      }),
      React.createElement(ProductsList_1['default'], {
        games: gamesSimulation,
        title: 'Simula\u00E7\u00E3o',
        background: 'black',
        id: 'simulation'
      }),
      React.createElement(ProductsList_1['default'], {
        games: gamedsRPG,
        title: 'RPG',
        background: 'gray',
        id: 'rpg'
      }),
      React.createElement(ProductsList_1['default'], {
        games: gamesFighting,
        title: 'Luta',
        background: 'black',
        id: 'fight'
      })
    )
  }
  return React.createElement(styles_1.ErrorOrLoading, null, 'Carregando...')
}
exports['default'] = Categories
