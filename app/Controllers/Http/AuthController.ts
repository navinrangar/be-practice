import Hash from '@ioc:Adonis/Core/Hash';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnauthenticatedException from 'App/Exceptions/UnauthenticatedException';
import User from 'App/Models/User';
import LoginValidator from 'App/Validators/LoginValidator';
import SignupValidator from 'App/Validators/SignupValidator'
import { appKey } from 'Config/app';
import jwt from 'jsonwebtoken';


export default class AuthController {
    public async signup(ctx: HttpContextContract) {
        const data = await ctx.request.validate(SignupValidator);
        return await User.create(data);
        // const loginHash = await Hash.make(data.password);
        // return await User.create({ ...data, password: loginHash });

        // user.firstName = data.first_name;
        // user.lastName = data.last_name;
        // user.email = data.email;
        // user.password = data.password;
        // await user.save();
    }

    public async login({ request }: HttpContextContract) {
        const data = await request.validate(LoginValidator);
        // const user = users.find(u => data.email === u.email && data.password === u.password)

        const user = await User.query().where('email', data.email).first();;

        if (!user) {
            throw UnauthenticatedException.invalidLoginCredentials();
        }

        // const loginHash = await Hash.make(data.password);

        // console.log('up', user.password);
        // console.log('lh', loginHash);

        const isVerified = await Hash.verify(user.password, data.password);

        if (!isVerified) {
            throw UnauthenticatedException.invalidLoginCredentials();
        }

        const token = jwt.sign({ sub: user.id }, appKey, { expiresIn: 60 * 60, jwtid: 'hi' });

        return { token, user }
    }

    public async home(ctx: HttpContextContract) {
        return 'Hi there. Please Signup! go to localhost:3333/signup';
    }
}
