const routes = require('express').Router()
const wrap = require('../lib/wrap')
const disciplinaHelper = require('../helpers/disciplina.helper')



/*
** Disciplina
*/
routes.get('/disciplina', wrap(async (req, res) => {
    let results = await disciplinaHelper.getDisciplinas()
    res.json(results)
})),

routes.post('/create', (req, res) => {
    let { nome_desafio, setor, regras, requisitos, premio, data_expiracao, data_criacao } = req.body
    disciplinaHelper.createDisciplina(nome_desafio, setor, regras, requisitos, premio, data_expiracao, data_criacao)
    
})


module.exports = routes
