const express = require('express');
const apiRouter = express.Router();

//All specific Routers are imported into api.js file that takes all of the Routers and attach them to apiRouter. ApiRouter is then exported into server.js where all the main magic happens

// I could just use: const apiRouter = require('express).Router()

// First I need to import Router from their specific files

const minionsRouter = require('./minions');
const ideasRouter = require('./ideas');
const meetingsRouter = require('./meetings');

// Now I will mount them to the apiRouter that will be my main Router
// The process is same as I used to do when main router was app

apiRouter.use('/minions',minionsRouter);
apiRouter.use('/ideas',ideasRouter);
apiRouter.use('/meetings',meetingsRouter);

module.exports = apiRouter;
