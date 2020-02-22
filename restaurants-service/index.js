const cote = require('cote')

const restaurants = [{
    id: 1,
    name: 'Turkish Restaurant',
    menu: [{
        id: 1,
        name: 'Kebap',
        price: 30
    }, {
        id: 2,
        name: 'Chicken Grill',
        price: 25
    }]
}, {
    id: 2,
    name: 'Italian Restaurant',
    menu: [{
        id: 1,
        name: 'Pasta',
        price: 15
    }, {
        id: 2,
        name: 'Polenta',
        price: 40
    }]
}, {
    id: 3,
    name: 'Spanish Restaurant',
    menu: [{
        id: 1,
        name: 'Gazpacho',
        price: 20
    }, {
        id: 2,
        name: 'Croquettes',
        price: 30
    }]
}]

const restaurantsResponder = new cote.Responder({ name: 'restaurants responder', key: 'restaurants' })
restaurantsResponder.on('*', req => req.type && console.log(req))

restaurantsResponder.on(req => req.type && console.log(req))

restaurantsResponder.on('list', req => Promise.resolve(restaurants))
