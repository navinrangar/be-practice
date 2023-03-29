import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnauthorizedException from 'App/Exceptions/UnauthorizedException';

export default class Acl {
  public async handle({ request }: HttpContextContract, next: () => Promise<void>, args: string[]) {
    
    if(!args.includes(request.loggedInUser.role)){
      throw new UnauthorizedException();
    }
    await next()
  }
}
