'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin_contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  admin_contact.init({
    name: DataTypes.STRING,
    whatsapp_number: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    paranoid: true,
    modelName: 'admin_contact',
  });
  return admin_contact;
};