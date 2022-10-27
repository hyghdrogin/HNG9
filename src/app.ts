import express from "express";
import cors from "cors";
import { TaskInterface } from "./utils/interface";
import { errorResponse, handleError } from "./utils/responses";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    const bio = "My name is Emmanuel Omopariola and I am a Backend Software Deverloper";
    const devDetails: TaskInterface = {
      slackUsername: "Hyghdrogin",
      backend: true,
      age: 25,
      bio
    };
    return res.json(devDetails);
  } catch (error) {
    handleError(error, req);
    return errorResponse(res, 500, "Server error");
  }
});

(async () => {
  app.listen(port, async () => {
    console.log(` API listening on ${port}`);
  });
})();

export default app;
