import express from "express";
import ArticleRoutes from "./routes/articles.js";
/************************** Initialize server **************************/
const app = express();
const PORT = 5099;
/************************** Middlewares **************************/
app.use(express.json());

/************************** Routes **************************/
app.get("/", (req, res) => {
   res.status(200).send(
      `
     <h1>Welcome the Research Square Company API</h1>
     <p>Take a look at the <a href="https://github.com/tedtalksbits/research-square-company-code-challenge">documentation </a>on github</p> 
     `
   );
});
app.use("/api/", ArticleRoutes);

/************************** Start server at PORT **************************/
app.listen(PORT, () =>
   console.log(`App runnig on port: http://localhost:${PORT}`)
);
