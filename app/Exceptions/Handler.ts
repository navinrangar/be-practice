/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnauthenticatedException from './UnauthenticatedException';

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  // public handle(error: any, ctx: HttpContextContract): Promise<any> {

  //   let statusCode;
  //   if (error instanceof UnauthenticatedException) {
  //     statusCode = 401;
  //   }

  //   if (statusCode) {
  //     ctx.response.status(statusCode).json({
  //       errors: [
  //         { message: error.message },
  //       ]
  //     })
  //   } else {
  //     super.handle(error, ctx);
  //   }
  // }
}