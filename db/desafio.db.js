const pool = require('../lib/pool')

module.exports = {

    async getDesafios(){
        let p = new Promise(async (resolve, reject) => {
            pool.getConnection(async function (err, connection) {
                let select = `SELECT nome, prazo, premio
                FROM desafios`
                pool.query(select, (err, res) => {
                    if (!err) {
                        resolve(res)
                    }
                    reject(err)
                })
                connection.release();
            })
        })

        let toreturn = await p

        return toreturn

    },

    async createDesafio(nome_desafio, setor, regras, requisitos, premio, data_expiracao, data_criacao) {
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            const insert = `INSERT INTO desafios (nome, setor, regras, requisitos, premio, prazo, data_criacao)
                            VALUES(?, ?, ?, ?, ?, ?, ?);`
            const values = [nome_desafio, setor, regras, requisitos, premio, data_expiracao, data_criacao]
                let results = connection.query(insert, values, function(error, results, fields){
                    connection.release();
                    // Handle error after the release.
                    if (error) throw error;
                })
                return results
        })
    },

}
