const db = require('../../data/dbConfig')

async function find(){
    const rows = await db('projects')
    return rows
}

function create(project){
    return db('projects').insert(project)
        .then(([project_id]) => {
            return db('projects').where('project_id', project_id).first()
        })
}

module.exports = {
    find,
    create
}
