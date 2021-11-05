const db = require('../../data/dbConfig')

async function find(){
    const rows = await db('tasks as t')
        .select('t.*', 'p.project_name', 'p.project_description')
        .join('projects as p', 'p.project_id','t.project_id')
    return rows.map(row => ({
        ...row,
        task_completed: !!row.task_completed
    }))
}

function create(task){
    return db('tasks').insert(task)
        .then(([task_id]) => {
            return db('tasks').where('task_id', task_id).first()
        })
}

module.exports = {
    find, 
    create
}
