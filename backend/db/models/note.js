"use strict";
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define("Note", {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [0, 51],
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    authorId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
      },
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  Note.associate = function (models) {
    // associa tions can be defined here
    Note.belongsTo(models.User, {
      as: "Author",
      foreignKey: "authorId",
    });
  };
  return Note;
};

Note.prototype.toSafeObject = function () {
  // remember, this cannot be an arrow function
  const { id, title, content, status, createdAt } = this; // context will be the User instance
  return { id, title, content, status, createdAt };
};
