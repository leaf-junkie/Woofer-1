module.exports = function (sequelize, DataTypes) {
  const Dog = sequelize.define('Dog', {
    dogName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.INTEGER
    },
    breed: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING
    },
    isUptoDate: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    getAlong: {
      type: DataTypes.STRING,
      allowNull: false
    },
    possessive: {
      type: DataTypes.STRING,
      allowNull: false
    },
    situation: {
      type: DataTypes.STRING
    },
    playStyle: {
      type: DataTypes.STRING
    },
    // TODO: fave-activity
    faveActivity: {
      type: DataTypes.STRING,
      defaultValue: 'Playing fetch'
    },
    dogPic: {
      type: DataTypes.STRING
    }
  });
  Dog.associate = (models) => {
    Dog.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Dog.hasMany(models.Interaction);
  };
  return Dog;
};
