const { Router } = require('express');
const Controller = require('./controller-lideres')

class Rotas {
    App;

    constructor() {
        this.App = Router();
        this.middleware();
        this.RoutesProtegidas();
    }

    middleware() {
    }

    RoutesProtegidas() {
        this.App.get('/', Controller.Criar);
    }
}
module.exports = new Rotas().App;