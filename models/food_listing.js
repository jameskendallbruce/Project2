module.exports = function(sequelize, DataTypes) {  
    var Food_Listing = sequelize.define("Food_Listing", {
      food_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      food_name: { type: DataTypes.STRING, allowNull: false },
      food_type: { type: DataTypes.STRING(20), allowNull: false },
      food_description: { type: DataTypes.TEXT, allowNull: false },
      price: { type: DataTypes.DECIMAL(3,2), allowNull: false },
      image_url: { type: DataTypes.TEXT, allowNull: false },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      delivery: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
    })
  
    return Food_Listing;
  }