const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { Note } = require("../../db/models");

const router = express.Router();

// Restore session user
router.get(
  "/:authorId(\\d+)",
  asyncHandler(async (req, res) => {
    console.log("\n\n\n\n\n\n", "we hit the route");
    const {
      params: { authorId },
    } = req;
    // if (!req.user) return res.json({});
    // const {
    //   user: { id: authorId },
    // } = req;
    // // const { user } = req;
    // // console.log("\n\n\n\n\n", " the user is ", authorId);
    const notes = await Note.findAll({
      where: { authorId },
    });
    return res.json({ notes });
  })
);

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { title, content, status } = req.body;

    try {
      const note = await Note.create({ title, content, status });
      return res.json({ [note.id]: note.toSafeObject() });
      ``;
    } catch (e) {
      const err = new Error("Post failed");
      err.status = 503;
      err.title = "Post failed";
      err.errors = ["its missing its worse"];
      return next(err);
    }
  })
);

module.exports = router;
