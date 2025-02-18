class ApiError extends Error{
    constructor(
        statuscode,
        message = "Something went wrong",
        Errors = [],
        statck = ""
    ){
        super(message)
        this.statuscode = statuscode
        this.data = null
        this.message = false
        this.Errors = Errors

        if (statck) {
            this.stack = this.stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}



export{ApiError}