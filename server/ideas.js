// - **/api/ideas**

// - GET /api/ideas to get an array of all ideas.
// - POST /api/ideas to create a new idea and save it to the database.
// - GET /api/ideas/:ideaId to get a single idea by id.
// - PUT /api/ideas/:ideaId to update a single idea by id.
// - DELETE /api/ideas/:ideaId to delete a single idea by id.

const ideasRouter = require('express').Router();
const checkMillionDollarIdea = require('./checkMillionDollarIdea')

module.exports = ideasRouter;


const { getAllFromDatabase,
        addToDatabase,
        getFromDatabaseById,
        deleteFromDatabasebyId } = require('./db');


// - GET /api/ideas to get an array of all ideas.
ideasRouter.get('/', (req,res,next) => {
    res.send(getAllFromDatabase('ideas'))
})

// - POST /api/ideas to create a new idea and save it to the database.
ideasRouter.post('/', checkMillionDollarIdea,(req,res,next) => {
    
    const newIdea = addToDatabase('ideas', req.body);

    res.status(201).send(newIdea);

})


ideasRouter.param('ideaId', (req, res, next, ideaId) => {
  
    const ideaFound = getFromDatabaseById('ideas', ideaId);

    if(ideaFound){
        
        req.ideaId = ideaFound.id
        next()
    }
    else{
        res.status(404).send('Idea not found.')
    }

}) 

// - GET /api/ideas/:ideaId to get a single idea by id.
ideasRouter.get('/:ideaId', (req,res,next) => {
    res.send(getFromDatabaseById('ideas',req.ideaId))
})

// - PUT /api/ideas/:ideaId to update a single idea by id.
ideasRouter.put('/:ideaId', checkMillionDollarIdea,(req,res,next) => {
        
        const ideaToUpdate = getFromDatabaseById('ideas',req.ideaId)

        ideaToUpdate.name = req.body.name
        ideaToUpdate.description = req.body.description
        ideaToUpdate.weeklyRevenue = req.body.weeklyRevenue
        ideaToUpdate.numWeeks = req.body.numWeeks

        res.send(ideaToUpdate)
})

// - DELETE /api/ideas/:ideaId to delete a single idea by id.
ideasRouter.delete('/:ideaId', (req,res,next) => {
    deleteFromDatabasebyId('ideas', req.ideaId)

    res.status(204).send()
})
