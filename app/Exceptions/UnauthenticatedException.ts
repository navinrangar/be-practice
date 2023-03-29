import { Exception } from '@adonisjs/core/build/standalone';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@adonisjs/core` allows defining
| a status code and error code for every exception.
|
| @example
| new UnauthenticatedException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class UnauthenticatedException extends Exception {
    private constructor(message: string) {
        super(message);
    }

    public static noTokenFound() {
        return new UnauthenticatedException('No Token Found!');
    }

    public static invalidToken() {
        return new UnauthenticatedException('Token is invalid!');
    }

    public static tokenExpired() {
        return new UnauthenticatedException('Token has been expired');
    }

    public static invalidLoginCredentials() {
        return new UnauthenticatedException('Either email or password are invalid')
    }

    public handle(error: this, ctx: HttpContextContract) {

        ctx.response.status(401).json({
            errors: [
                { message: error.message },
            ]
        })
    }
}
