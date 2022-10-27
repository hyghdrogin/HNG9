"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const responses_1 = require("./utils/responses");
const app = (0, express_1.default)();
const port = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    try {
        const bio = "My name is Emmanuel Omopariola and I am a Backend Software Deverloper";
        const devDetails = {
            slackUsername: "Hyghdrogin",
            backend: true,
            age: 25,
            bio
        };
        return res.json(devDetails);
    }
    catch (error) {
        (0, responses_1.handleError)(error, req);
        return (0, responses_1.errorResponse)(res, 500, "Server error");
    }
});
app.use((req, res) => res.status(404).send({
    status: "error",
    error: "Not found",
    message: "Route not correct kindly check url.",
}));
(() => __awaiter(void 0, void 0, void 0, function* () {
    app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log(` API listening on ${port}`);
    }));
}))();
process.on("unhandledRejection", (error) => {
    console.log("FATAL UNEXPECTED UNHANDLED REJECTION!", error.message);
    console.error("\n\n", error, "\n\n");
});
exports.default = app;
