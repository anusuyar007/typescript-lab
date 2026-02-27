// This loads and executes external.js
// require("./external"); //require is nt there, so its error, try below option import

import "./external.js"; // IMPORTANT: include .js extension

//below is available in external.js
//using declare, declare the prototype
declare function displayMessage(str: string): void; //exists in another js or external library
displayMessage("Hello"); //then call that function

//-------------------------------------------------------------------------------
import { dispMsg } from "./external.js";
dispMsg("hey");
