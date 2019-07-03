const professorDB = require('../db/professor.db')
const logger = require('../lib/logger')

module.exports = {

    async getProfessores() {
        console.log('chegou helper')
        console.log(await professorDB.getProfessores())
        return  await professorDB.getProfessores()
        
    },
    async getTitulacao() {
        console.log('chegou helper')
        console.log(await professorDB.getTitulacao())
        return  await professorDB.getTitulacao()
        
    },
    
}
