import express from "express";
import ArticleRoutes from "./routes/articles.js";
/************************** Initialize server **************************/
const app = express();
const PORT = 5099;
/************************** Middlewares **************************/
app.use(express.json());

/************************** Routes **************************/
app.get("/", (req, res) => {
   // send index html to "/" route with information about API endpoints
   res.status(200).send("Welcome the Research Square Company API");
});
app.use("/api/", ArticleRoutes);

/************************** Start server at PORT **************************/
app.listen(PORT, () =>
   console.log(`App runnig on port: http://localhost:${PORT}`)
);
