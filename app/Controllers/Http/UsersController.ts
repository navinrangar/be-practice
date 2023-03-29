import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class UsersController {
  public async index({ request }: HttpContextContract) {
    return User.all();
  }

  public async me({ request }: HttpContextContract) {
    return request.loggedInUser;
  }

  public async store({ }: HttpContextContract) { }

  public async show({ request }: HttpContextContract) {
    return `hey ${request.loggedInUser?.email}`

  }

  public async update({ }: HttpContextContract) { }

  public async destroy({ }: HttpContextContract) { }
}
