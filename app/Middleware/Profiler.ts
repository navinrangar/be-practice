import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Profiler {
  public async handle({ request }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const start = Date.now();
    console.log(request.loggedInUser?.email);
    await next()
    const end = Date.now();
    const timeTaken = end - start;
    console.log('time taken', request.parsedUrl.path, start, end, timeTaken);
  }
}
