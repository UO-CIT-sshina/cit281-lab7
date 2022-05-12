class CustomError extends Error {
    constructor(name = "CustomError"){
        super(name);
    }
}

function throwGenericError() {
    throw new Error("Generic error");
}

function throwCustomError() {
    throw new CustomError("Custom error");
}

try {
    console.log("Force generic error\nGeneric error try block");
    throwGenericError();
}
catch(error) {
    console.log(`Generic error catch block\nError: ${error.message}`);
}
finally {
    console.log("Generic error finally block");
}
try {
    console.log("Force custom error\nCustom error try block");
    throwCustomError();
}
catch(error) {
    console.log(`Custom error catch block\nCustomError: ${error.message}`);
}
finally {
    console.log("Custom error finally block");
}