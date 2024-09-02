class AppError extends Error {
    constructor(status, msg){
        super(msg);
        this.message = msg;
        this.status = status;
    }
}

module.exports = AppError;