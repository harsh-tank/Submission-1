"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const bookservice_1 = __importDefault(require("./bookservice"));
const contact_us_1 = __importDefault(require("./contact_us"));
const login_1 = __importDefault(require("./login"));
const subscribeuser_1 = __importDefault(require("./subscribeuser"));
const app = (0, express_1.default)();
app.use('/', contact_us_1.default);
app.use('/', subscribeuser_1.default);
app.use('/', login_1.default);
app.use('/', bookservice_1.default);
module.exports = app;
