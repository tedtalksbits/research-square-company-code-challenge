import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

const articleStatus = {
  approved: "approved",
  pending: "pending",
  disapproved: "disapproved",
};
const tempDb = [
  {
    id: "1",
    title: "Test article 1",
    authors: ["Jane Doe", "John Doe"],
    article: "The theory of everything",
    status: articleStatus.approved,
    date: "3/22/2022",
  },
  {
    id: "2",
    title: "Test article 2",
    authors: ["James Doe", "Jesse Doe"],
    article: "Lovely",
    abstract:
      "You do not need to implement authentication, authorization, or permissions for any pages or api endpoints.",
    status: articleStatus.pending,
    date: "3/1/2022",
  },
  {
    id: "3",
    title: "Test article 3",
    authors: ["June Doe", "May Doe"],
    article:
      "Your job is to create a simple proof of concept web application to test this concept.",
    abstract: "Abstract",
    status: articleStatus.disapproved,
    date: "3/1/2022",
  },
];
/************************** End points **************************/

// POST
router.post("/articles", (req, res) => {
  const { title, authors, abstract, article } = req.body;

  // title, authors, authors fields must not be empty
  if (title && authors && article) {
    let newArticle = {
      id: uuidv4(),
      title,
      authors,
      abstract,
      article,
      status: "pending",
      date: new Date().toLocaleDateString(),
    };
    try {
      res.status(201).json({
        data: newArticle,
      });
      tempDb.push(newArticle);
    } catch (error) {
      res.status(500).json({
        status: "500 Internal Server Error, please try again later.",
        error_msg: error,
        date: new Date().toLocaleDateString(),
      });
    }
  } else {
    res.status(400).json({
      status: "400 bad request",
      error_msg:
        "Article fields: title, authors, and article must not be empty",
    });
  }
});

// GET (approved articles)
// ISSUE: "A public page for researchers to view all approved articles"
// What? Maybe useful to render all articles public with an approval status instead
// Why? 1. Bad UX, users can't view article unless approved. 2. Need a seperate route for admin to get all articles
// fix? articles have a status propertie
router.get("/articles", (req, res) => {
  try {
    res.status(200).json({
      status: "200 ok",
      data: tempDb,
    });
  } catch (error) {
    res.status(500).json({
      status: "500 Internal Server Error, please try again later.",
      error_msg: error,
    });
  }
});

// Approve/Disapprove an article
router.put("/article/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  // newApprovalValue is required and must be a boolean
  if (
    status !== articleStatus.approved ||
    articleStatus.pending ||
    articleStatus.disapproved
  ) {
    return res.status(400).json({
      error_msg: `Incorrect status: '${status}'. Article status can only be: pending, approved, or disapproved.`,
    });
  }

  // find requested article to be edited
  const requestedArticle = tempDb.filter((article) => article.id === id);

  // create a new updated article and change the value of approved to newApprovalValue
  const updatedArticle = requestedArticle.map((article) => {
    return { ...article, status: status };
  });

  // find the index of requestedArticle in tempDb
  const requestedArticleIndex = tempDb.map((article) => article.id).indexOf(id);

  // replace requestedArticle with updatedArticle
  tempDb[requestedArticleIndex] = { ...updatedArticle[0] };

  //  if found requested article
  if (requestedArticle.length !== 0) {
    try {
      res.status(201).json({
        ...tempDb[requestedArticleIndex],
        appovedDate: new Date().toLocaleDateString(),
      });
    } catch (error) {
      res.status(500).json({
        status: "500 Internal Server Error, please try again later.",
        error_msg: error,
      });
    }
  } else {
    res.status(400).json({
      error_msg:
        "Article was not found: make sure url is http://localhost:5099/api/article/:id, where :id is a required parameter",
    });
  }
});

export default router;
