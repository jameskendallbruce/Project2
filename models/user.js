module.exports = function(sequelize, DataTypes) {
    console.log("=========================================");
    console.log("\nCREATING USER AND FOOD TABLES BELOW\n");
    console.log("=========================================");

    var User = sequelize.define("User", {
      user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      first_name: { type: DataTypes.STRING(20), allowNull: false },
      last_name: { type: DataTypes.STRING(20), allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      state: { type: DataTypes.STRING(50), allowNull: false },
      city: { type: DataTypes.STRING(50), allowNull: false },
      zip: { type: DataTypes.INTEGER },
    });
 
    // console.log(User)

    return User;
}