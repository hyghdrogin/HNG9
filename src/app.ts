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

app.use((req, res) => res.status(404).send({
  status: "error",
  error: "Not found",
  message: "Route not correct kindly check url.",
}));

(async () => {
  app.listen(port, async () => {
    console.log(` API listening on ${port}`);
  });
})();

process.on("unhandledRejection", (error: any) => {
  console.log("FATAL UNEXPECTED UNHANDLED REJECTION!", error.message);
  console.error("\n\n", error, "\n\n");
  //  throw error;
});

export default app;
