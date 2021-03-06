'use strict';
module.exports = function(sequelize, DataTypes) {
  var WardService = sequelize.define('WardService', {
    wardId: {
      type: DataTypes.INTEGER,
      unique: 'compositeIndex'
    },
    serviceId: {
      type: DataTypes.INTEGER,
      unique: 'compositeIndex'
    },
    level1: DataTypes.INTEGER,
    level2: DataTypes.INTEGER,
    level3: DataTypes.INTEGER,
    visible: DataTypes.BOOLEAN
  }, {
    tableName: 'WardsServices',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        WardService.belongsTo(models.Ward, { as: 'ward' });
        WardService.belongsTo(models.Service, { as: 'service' });
        WardService.hasMany(models.Request, { as: 'requests' });
      }
    }
  });
  return WardService;
};