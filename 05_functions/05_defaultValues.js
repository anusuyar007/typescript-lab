//default value
function helloWorld(name) {
    if (name === void 0) { name = "dummyValue"; }
    console.log(name);
}
helloWorld(); //if yu dont pass, default value will be displayed
helloWorld("ActualValue"); // value passed, will be displayed(here default value is ignored)
