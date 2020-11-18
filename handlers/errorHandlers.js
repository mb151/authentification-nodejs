/***
 * Catch Errors Handler
 */

exports.catchErrors = (fn) => {
    return function(req, res, next){
        fn(req, res, next).catch((err) => {
            //vALIDATION ERRORS
            if(typeof err === "string"){
                res.status(400).json({
                    message: err,
                });
            }else{
                next(err);
            }
        });
    };
} ;

/***
 * MongoDB Validation Error Handler
 * Detect if ther are mongodb validation errors that we send them nicely back.
 */
exports.mongoseErrors = (err, req, res, next) => {
    if(!err.errors) return next(err);
    const errorKeys = Object.keys(err.errors);
    let message = "";
    errorKeys.forEach((key) => (message += err.errors[key].message + ", "));

    message = message.substr(0, message.length - 2);
    res.status(400).json({
        message,
    });
};

/**
 * Development Error Handler
 * In development we show good error messages so if we hit a syntaxe error of any other 
 */
exports.developmentErrors = (err, req, res, next) => {
    err.stack = err.stack || "";
    const errorDetails = {
        message: err.message,
        status: err.status,
        stack: err.stack,
    };

    res.status(err.status || 500).json(errorDetails);
}

/**
 * Production Error Handler
 * No stracktraces and error details are leaked to user
 */

exports.productionErrors = (err, req, res, next) => {
    res.status(err.status || 500).json({
        error: "Internal Server Error",
    })
}

/**
 * 404 Page Error
 */

exports.notFound = (req, res, next) => {
    res.status(400).json({
        message: "Route not found",
    })
}