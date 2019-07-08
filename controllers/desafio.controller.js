const routes = require('express').Router()
const wrap = require('../lib/wrap')
const desafioHelper = require('../helpers/desafio.helper')



/*
** Disciplina
*/
routes.get('/list', wrap(async (req, res) => {
    let results = await desafioHelper.getDesafios()
    res.json(results)
})),

routes.post('/create', wrap(async (req, res) => {
    let { nome_desafio, setor, regras, requisitos, premio, data_expiracao, data_criacao } = req.body
    let oi = await desafioHelper.createDesafio(nome_desafio, setor, regras, requisitos, premio, data_expiracao, data_criacao)
    res.json(oi)
}))


module.exports = routes
