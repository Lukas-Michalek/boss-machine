// Generally, we will keep each router in its own file, and require them in the main application. This allows us to keep our code clean and our files short.

//1. Create Router specific to api/minions path:

const minionsRouter = require('express').Router();

// This is the same as if I would write:    
// const express = require('express)
// const minionsRouter = express.Router()
// ==> const minionsRouter = require('express').Router() which is shortcut


// Router needs to be exported to be used in the main application(in this case api.js will take all different routers and attach them to main router -> apiRouter in order to keep code as clean as possible)
module.exports = minionsRouter;


// /api/minions

// GET /api/minions to get an array of all minions.
// POST /api/minions to create a new minion and save it to the database.
// GET /api/minions/:minionId to get a single minion by id.
// PUT /api/minions/:minionId to update a single minion by id.
// DELETE /api/minions/:minionId to delete a single minion by id.


// First I need to import all the methods from database that are needed for different HTTP Requests

// Notice that I am not using '/minions' path even though it is minionsRouter. The reason is that I am attaching this path later in api.js when attaching to apiRouter. The flow is from server.js -> api.js -> minions.js

const { 
    getAllFromDatabase,
    addToDatabase,
    getFromDatabaseById,
    deleteFromDatabasebyId } = require('./db');

// send all minions - GET
minionsRouter.get('/', (req,res,next) => {    
    res.send(getAllFromDatabase('minions'));
})

// create new minion - POST
// User will fill input fields such as Name, Title, Salary and Weakness. These are added to an object and after clicking submit button save this is send as an object. Now to access fields necessary for addToDatabase second argument (object.name, object.title, object.salary and object.weakness) => so the minion can be created, I need to ship it as req.body. 

// As it can still fail I am adding status 201 -> Created
minionsRouter.post('/', (req,res,next) => {
    
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});


// I am going to take an advantage of the fact that all 3 routes uses same param => id, so in order to adjust DRY (Don`t Repeat Yourself) I will use Router.param


minionsRouter.param('minionId', (req,res,next, minionId) => {

    // First lets check if that id is even in database
    // Note that I must keep minionId as STRING because the format of minion object is as follows: 
    
    //  {   
    //      id: '2', 
   //       name: 'Chaim Spencer', 
   //       title: 'Chief Creative Liaison', 
   //       weaknesses: 'Will not build integrated ability, Cannot do interactive capability, Cannot do holistic archive, too primary',//
   //       salary: 40000 }

    const minionFound = getFromDatabaseById('minions', minionId);
    
    if(minionFound){
        req.minionId = minionFound.id;
        next();
    }
    else{
        res.status(404).send('Not Found');
    }
});


// Look for single minion ID
minionsRouter.get('/:minionId', (req,res,next) => {
    res.send(getFromDatabaseById('minions', req.minionId))
})


// Update single minion with PUT
minionsRouter.put('/:minionId', (req,res,next) => {

    // take out the minion I want to change:
   const minionToUpdate = getFromDatabaseById('minions', req.minionId)
   
   minionToUpdate.name = req.body.name
   minionToUpdate.title = req.body.title
   minionToUpdate.weaknesses = req.body.weaknesses
   minionToUpdate.salary = req.body.salary
   
   
   res.send(minionToUpdate);

    // Another way to do this would be by using function from db:
    // let updatedMinionInstance = updateInstanceInDatabase('minions', req.body);
    //  res.send(updatedMinionInstance);

})

// delete a single minion by id.
minionsRouter.delete('/:minionId', (req,res,next) => {

    deleteFromDatabasebyId('minions', req.minionId)
   
    res.status(204).send()
})







