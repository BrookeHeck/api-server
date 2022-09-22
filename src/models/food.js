'use strict';

const foodSchema = (sequelize, DataTypes) => sequelize.define(
  'Food',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
);

module.exports = foodSchema;