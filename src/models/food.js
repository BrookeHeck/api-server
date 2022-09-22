'use strict';

const foodSchema = (sequelize, DataTypes) => sequelize.define(
  'Food',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
);

module.exports = foodSchema;