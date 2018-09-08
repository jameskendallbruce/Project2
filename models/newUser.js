module.exports = function(sequelize, DataTypes) {
    
    var newUser = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        username: DataTypes.STRING(120),
        password: DataTypes.STRING(120),
        first_name: DataTypes.STRING(120),
        last_name: DataTypes.STRING(120),
        address: DataTypes.STRING,
        city: DataTypes.STRING(150)
    });
 
    return newUser;
};