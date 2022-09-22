'use strict';

const clothesSchema = (sequelize, DataTypes) => sequelize.define(
  'Clothes',
  {
    name: DataTypes.STRING,
    allowNull: false,
  },
  {
    price: DataTypes.INTEGER,
    allowNull: false,
  },
  {
    price: DataTypes.STRING,
    allowNull: false,
  },
);

module.exports = clothesSchema;