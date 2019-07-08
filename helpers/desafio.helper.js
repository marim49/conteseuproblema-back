const desafioDB = require('../db/desafio.db')
const logger = require('../lib/logger')

module.exports = {

    async getDesafios() {
        console.log('chegou helper')
        console.log(await desafioDB.getDesafios())
        return  await desafioDB.getDesafios()
        
    },

    async createDesafio(nome_desafio, setor, regras, requisitos, premio, data_expiracao, data_criacao){
            desafioDB.createDesafio(nome_desafio, setor, regras, requisitos, premio, data_expiracao, data_criacao)
            return { success: true }
    },
}
