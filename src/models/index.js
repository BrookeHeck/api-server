'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const foodSchema = require('./food');
const clothesSchema = require('./clothes');
const customerSchema = require('./customer');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory';

let sequelize = new Sequelize(DATABASE_URL);

const FoodModel = foodSchema(sequelize, DataTypes);
const ClothesModel = clothesSchema(sequelize, DataTypes);
const CustomerModel = customerSchema(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  Food: FoodModel,
  Clothes: ClothesModel,
  Customer: CustomerModel,
};

