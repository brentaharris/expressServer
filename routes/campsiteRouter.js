const express = require('express');
const campsiteRouter = express.Router();

//base routing
campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

// campsiteId routing
campsiteRouter.route('/:campsiteId')
.all((req, res) => {
    res.statusCode = 200;
    req.setHeader('Content/Type', 'text/plain')
    res.end(`Will send the details of the campsite ${req.params.campsiteId}`)
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsite/${req.params.campsiteId}`)
})
.put((req, res) => {
    res.end(`Will update the campsite: ${req.body.name} with description ${req.body.description}`)
})
.delete((req, res) => {
    res.end(`Deleting campsite of id: ${res.params.campsiteId}`)
})


module.exports = campsiteRouter;

