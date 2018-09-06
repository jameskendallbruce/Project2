module.exports = function(sequelize, DataTypes) {
  var newUser = sequelize.define("user", {
    username: DataTypes.STRING(20),
    password: DataTypes.STRING(20),
    user_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING(20),
    last_name: DataTypes.STRING(20),
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    state: DataTypes.STRING(50),
    city: DataTypes.STRING(50),
    zip: DataTypes.INTEGER
  });

  return newUser;
};