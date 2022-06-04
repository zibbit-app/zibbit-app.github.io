import { AppError, UnauthorizedError, ForbiddenError, BadRequestError } from './../errors/ApplicationErrors';
import { ErrorHandler, Injectable, Injector, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { ErrorType } from "../components/ErrorComponent";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private get _router() { return this._injector.get(Router); }
  
  constructor(
    //private errorDialogService: ErrorDialogService,
    private _injector: Injector,
    private zone: NgZone
  ) {}

  handleError(error: any) {

    if (error.promise && error.rejection) {
      // Promise rejection wrapped by zone.js
      error = error.rejection;
    }
    //console.log("global error handler called");
    // Check if it's an error from an HTTP response
    // if (!(error instanceof HttpErrorResponse)) {
    //   error = error.rejection; // get the error object
    // }
    //console.log("test Error", error);


    var isAppError = error instanceof AppError;

    console.log("wtf is error:", error.message);


    if(isAppError){
        if(error instanceof UnauthorizedError)
        {
          var tErr = error as UnauthorizedError
          this.zone.run(() => {

          this._router.navigate(["/login"],
            { queryParams: { redirecUrl: tErr.redirectUrl } }

          );
          });
        }

        if(error instanceof ForbiddenError) {
          console.log("forbidden error handler called")
          this.zone.run(() => {

          this._router.navigate(
            ["/error"],
            { queryParams: { errorType: ErrorType.Forbidden, errorMessage: error.message } }
          )});
        }

        if(error instanceof BadRequestError) {
          console.log("bad request error handler called")
          this.zone.run(() => {

          this._router.navigate(
            ["/error"],
            { queryParams: { errorType: ErrorType.BadRequest, errorMessage: error.message } }
          )});
        }
    }
    else{
      console.error("unhandled error");
      console.error(error);
      var message = null;
      // if(error instanceof Error){
      //   var tError = error as Error;
      //   message = tError.message || tError.name;
      // }
      this.zone.run(() => {
        this._router.navigate(
          ["/error"],
          { queryParams: { errorType: ErrorType.Unknown, errorMessage: message } }
        )});
  

    }
    

  };
}
