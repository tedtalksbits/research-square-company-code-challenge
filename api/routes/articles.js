import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

const tempDb = [];
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
         approved: false,
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

// GET all articles
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
   const { approved } = req.body;

   // newApprovalValue is required and must be a boolean
   if (typeof approved !== "boolean") {
      return res.status(400).json({
         error_msg: "To update article, approved field must be true/false",
      });
   }

   // find requested article to be edited
   const requestedArticle = tempDb.filter((article) => article.id === id);

   // create a new updated article and change the value of approved to newApprovalValue
   const updatedArticle = requestedArticle.map((article) => {
      return { ...article, approved: approved };
   });

   // find the index of requestedArticle in tempDb
   const requestedArticleIndex = tempDb
      .map((article) => article.id)
      .indexOf(id);

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
