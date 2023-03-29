import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TodoValidator from 'App/Validators/TodoValidator';

export default class TodosController {
    public async add (ctx: HttpContextContract) {
        const data = await ctx.request.validate(TodoValidator);
        return {data};
    }
}
