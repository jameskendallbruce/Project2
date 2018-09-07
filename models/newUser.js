// module.exports = function (sequelize, DataTypes) {
//     var newListing = sequelize.define("l", {
//       food_name: DataTypes.STRING,
//       food_type : DataTypes.STRING,
//       description: DataTypes.TEXT,
//       price: DataTypes.DOUBLE,
//       delivery: DataTypes.BOOLEAN
//     });
//     return newListing;
//   };

// var User = sequelize.define("User", {
//     user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     first_name: { type: DataTypes.STRING(20), allowNull: false },
//     last_name: { type: DataTypes.STRING(20), allowNull: false },
//     email: { type: DataTypes.STRING, allowNull: false },
//     address: { type: DataTypes.STRING, allowNull: false },
//     state: { type: DataTypes.STRING(50), allowNull: false },
//     city: { type: DataTypes.STRING(50), allowNull: false },
//     zip: { type: DataTypes.INTEGER }
// });

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