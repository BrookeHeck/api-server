'use strict';

const { Food, db } = require('./../src/models');
const app = require('./../src/server');
const supertest = require('supertest');
const request = supertest(app);

beforeAll(async () => {
  await db.sync();
  await request.post('/food').send({
    name: 'TEST1',
    price: 100,
  });
  await request.post('/food').send({
    name: 'TEST2',
    price: 200,
  });
  await request.post('/food').send({
    name: 'TEST3',
    price: 300,
  });
});

describe('Testing GET food routes', () => {
  test('Should read all food items', async () => {
    const response = await request.get('/food');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toEqual(true);
  });

  test('Should read a single food item', async () => {
    const response = await request.get('/food/1');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('TEST1');
    expect(response.body.price).toEqual(100);
  });
});

describe('Testing POST food route', () => {
  test('Should create a single food item', async () => {
    const response = await request.post('/food').send({
      name: 'TEST4',
      price: 400,
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('TEST4');
    expect(response.body.price).toEqual(400);
  });
});

describe('Testing PUT food route', () => {
  test('Should update a single food item', async () => {
    await request.put('/food/2').send({
      name: 'TEST UPDATE',
      price: 500,
    });
    const response = await request.get('/food/2');
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(2);
    expect(response.body.name).toEqual('TEST UPDATE');
    expect(response.body.price).toEqual(500);
  });
});

describe('Testing DELETE food route', () => {
  test('Should delete a single food item', async () => {
    const deletedRecord = await request.delete(`/food/3`);
    const foodRecord = await Food.read(3);
    expect(foodRecord).not.toBeTruthy();
    expect(deletedRecord.status).toEqual(200);
    expect(deletedRecord.body.id).toEqual(3);
    expect(deletedRecord.body.name).toEqual('TEST3');
    expect(deletedRecord.body.price).toEqual(300);
  });
});

describe('Testing the error handling of server', () => {
  test('Should respond with a 404 for incorrect method', async () => {
    const response = await request.post('/what!?');
    expect(response.status).toEqual(404);
  });

  test('Should respond with a 404 for incorrect route', async () => {
    const response = await request.get('/nothing-here/');
    expect(response.status).toEqual(404);
  });

  test('Should respond with a 500 status because no body in POST request', async () => {
    const response = await request.post('/food');
    expect(response.status).toEqual(500);
  });
});