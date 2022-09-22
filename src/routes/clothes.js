'use strict';

const express = require('express');
const router = express.Router();

const { Clothes } = require('./../models');

router.get('/clothes', (request, response, next) => {
  Clothes.read()
    .then(clothesRecords => response.status(200).send(clothesRecords))
    .catch(error => next(error));
});

router.get('/clothes/:id', (request, response, next) => {
  Clothes.read(request.params.id)
    .then(clothesRecord => response.status(200).send(clothesRecord))
    .catch(error => next(error));
});

router.post('/clothes', (request, response, next) => {
  Clothes.create(request.body)
    .then(clothesRecord => response.status(200).send(clothesRecord))
    .catch(error => next(error));
});

router.put('/clothes/:id', (request, response, next) => {
  Clothes.update(request.body, request.params.id)
    .then(clothesRecord => response.status(200).send(clothesRecord))
    .catch(error => next(error));
});

router.delete('/clothes/:id', (request, response, next) => {
  Clothes.delete(request.params.id)
    .then(clothesRecord => response.status(200).send(clothesRecord));
});

module.exports = router;