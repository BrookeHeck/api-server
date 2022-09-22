'use strict';

const express = require('express');
const router = express.Router();

const { Food } = require('./../models');

router.get('/food', (request, response, next) => {
  Food.findAll()
    .then(foodRecords => response.status(200).send(foodRecords))
    .catch(error => next(error));
});

router.get('/food/:id', (request, response, next) => {
  Food.findOne({ where: { id: request.params.id }})
    .then(foodRecord => response.status(200).send(foodRecord))
    .catch(error => next(error));
});

router.post('/food', (request, response, next) => {
  Food.create(request.body)
    .then(foodRecord => response.status(200).send(foodRecord))
    .catch(error => next(error));
});

router.put('/food/:id', (request, response, next) => {
  Food.update(request.body, { where: { id: request.params.id } })
    .then(() => response.status(200).send('Successfully Updated'))
    .catch(error => next(error));
});

router.delete('/food/:id', (request, response, next) => {
  Food.destroy({ where: {id: request.params.id } })
    .then(() => response.status(200).send('Successfully Deleted'));
});

module.exports = router;