'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const foodSchema = require('./food');
const clothesSchema = require('./clothes');
const customerSchema = require('./customer');
const Collection = require('./Collection');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory';

let sequelize = new Sequelize(DATABASE_URL);

const FoodModel = foodSchema(sequelize, DataTypes);
const ClothesModel = clothesSchema(sequelize, DataTypes);
const CustomerModel = customerSchema(sequelize, DataTypes);

// add association
CustomerModel.hasMany(ClothesModel, {foreignKey: 'customerId', sourceKey: 'id'});
ClothesModel.belongsTo(CustomerModel, {foreignKey: 'customerId', sourceKey: 'id'});

CustomerModel.hasMany(FoodModel, {foreignKey: 'customerId', sourceKey: 'id'});
FoodModel.belongsTo(CustomerModel, {foreignKey: 'customerId', sourceKey: 'id'});

module.exports = {
  db: sequelize,
  Food: new Collection(FoodModel),
  Clothes: new Collection(ClothesModel),
  Customer: new Collection(CustomerModel),
};

