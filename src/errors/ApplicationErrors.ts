
export class AppError extends Error{
    constructor(msg: string = "Unknown error"){
        super(msg)
        Object.setPrototypeOf(this, AppError.prototype);
    }
}

export class UnauthorizedError extends AppError {
    constructor(redirectUrl: string = null, msg: string = "User is unauthorized"){
        super(msg)
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
        this.redirectUrl = redirectUrl;
    } 
    public redirectUrl: string;  
}


export class ForbiddenError extends AppError {
    constructor(msg: string = "User is forbidden"){
        super(msg)
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }   
}

export class BadRequestError extends AppError {
    constructor(msg: string = "Bad request"){
        super(msg)
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }   
}