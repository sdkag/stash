"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Notes",
      [
        {
          title: "The Begining",
          content: "This is the beginning of the rest of your life",
          status: "pinned",
          authorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Begining",
          content: "This is the beginning of the rest of your life",
          status: "pinned",
          authorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Begining",
          content: "This is the beginning of the rest of your life",
          status: "archive",
          authorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Begining",
          content: "This is the beginning of the rest of your life",
          status: "notes",
          authorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Begining",
          content: "This is the beginning of the rest of your life",
          status: "archive",
          authorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The End",
          content: "This is the beginning of the rest of your life",
          status: "notes",
          authorId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Notes", null, {});
  },
};
