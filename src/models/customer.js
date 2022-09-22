'use strict';

const customerSchema = (sequelize, DataTypes) => sequelize.define(
  'Customers',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
);

module.exports = customerSchema;