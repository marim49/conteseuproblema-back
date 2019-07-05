const disciplinaDB = require('../db/disciplina.db')
const logger = require('../lib/logger')

module.exports = {

    async getDisciplinas() {
        console.log('chegou helper')
        console.log(await disciplinaDB.getDisciplinas())
        return  await disciplinaDB.getDisciplinas()
        
    },

    async createDisciplina(nome_desafio, setor, regras, requisitos, premio, data_expiracao, data_criacao){
            return disciplinaDB.createDisciplina(nome_desafio, setor, regras, requisitos, premio, data_expiracao, data_criacao)
        
    },
}
