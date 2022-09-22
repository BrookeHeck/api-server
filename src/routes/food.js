'use strict';

const express = require('express');
const router = express.Router();

const { Food } = require('./../models');

router.get('/food', (request, response, next) => {
  Food.read()
    .then(foodRecords => response.status(200).send(foodRecords))
    .catch(error => next(error));
});

router.get('/food/:id', (request, response, next) => {
  Food.read(request.params.id)
    .then(foodRecord => response.status(200).send(foodRecord))
    .catch(error => next(error));
});

router.post('/food', (request, response, next) => {
  Food.create(request.body)
    .then(foodRecord => response.status(200).send(foodRecord))
    .catch(error => next(error));
});

router.put('/food/:id', (request, response, next) => {
  Food.update(request.body, request.params.id)
    .then(foodRecord => response.status(200).send(foodRecord))
    .catch(error => next(error));
});

router.delete('/food/:id', (request, response, next) => {
  Food.delete(request.params.id)
    .then(foodRecord => response.status(200).send(foodRecord));
});

module.exports = router;