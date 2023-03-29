import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnauthenticatedException from 'App/Exceptions/UnauthenticatedException';
import User from 'App/Models/User';
import { appKey } from 'Config/app';
import jwt from 'jsonwebtoken';

export default class Auth {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    const token = ctx.request.headers().authorization;

    if (!token) {
      throw UnauthenticatedException.noTokenFound();
    }

    try {
      const data = jwt.verify(token, appKey) //data is payload of token
      ctx.request.loggedInUser = await User.findOrFail(data.sub);

    } catch (e) {
      if (e.name === 'TokenExpiredError') {
        throw UnauthenticatedException.tokenExpired();
      }
      throw UnauthenticatedException.invalidToken();
    }

    await next()
  }
}
