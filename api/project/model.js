// build your `Project` model here
const db = require('../../data/dbConfig')

async function find(){
    return db('projects')
    // const rows = await db('projects')

    // let result = { ...rows, project_completed: !!rows.project_completed }

    // return result

    // let rows.project_completed = 

    // const result = {
    //     project_id: rows.project_id,
    //     project_name: rows.project_name,
    //     project_description: rows.project_description,
    //     project_completed: rows.project_completed,
    // }

    // rows.forEach(row => {
    //     if(project_completed === 0){
    //         !!result.project_completed
    //     } else {
    //         !!result.project_completed
    //     }
    // })

    // return result
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
