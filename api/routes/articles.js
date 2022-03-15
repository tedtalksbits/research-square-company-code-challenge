import express from "express";

const router = express.Router();

/************************** End points **************************/

// POST
router.post("/articles", (req, res) => {
   res.status(200).send("post route working");
});

// GET (approved articles)
router.get("/articles", (req, res) => {
   res.status(200).json({
      status: "ok",
      data: {},
   });
});

export default router;
