module.exports = function (sequelize, DataTypes) {
  var newListing = sequelize.define("listing", {
    food_name: DataTypes.STRING,
    food_type : DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DOUBLE,
    serving_location: DataTypes.STRING,
    seller_id: DataTypes.STRING,
    delivery: DataTypes.BOOLEAN,
    url : DataTypes.STRING
  });
  return newListing;
};

