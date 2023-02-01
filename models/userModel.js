//user model
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define( "user", {
      firstName: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
      email: {
          type: DataTypes.STRING,
          unique: true,
          isEmail: true, //checks for email format
          allowNull: false
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      },
      createdate: {
        type: DataTypes.DATE,
        allowNull: false
      }, 
      numberofevents: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      lastevent: {
        type: DataTypes.DATE,
        allowNull: false
      },
      school: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: false
      },
  }, {timestamps: true}, )
  return User
}