"use strict";
// This loads and executes external.js
// require("./external"); //require is nt there, so its error, try below option import
Object.defineProperty(exports, "__esModule", { value: true });
require("./external.js"); // IMPORTANT: include .js extension
var external_js_1 = require("./external.js");
displayMessage("Hello"); //then call that function
(0, external_js_1.dispMsg)("hey");
