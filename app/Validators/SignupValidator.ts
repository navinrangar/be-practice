import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import errorMessages from './helpers/_messages'

export default class SignupValidator {
  constructor(protected ctx: HttpContextContract) { }

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    first_name: schema.string({ trim: true }, [rules.alpha()]),
    last_name: schema.string({ trim: true }, [rules.alpha()]),
    email: schema.string({ trim: true }, [rules.email(), rules.unique({ table: 'users', column: 'email', caseInsensitive: true })]),
    password: schema.string({}, [rules.minLength(8)]),
    // name: schema.string({ trim: true, escape: true }),
    // email: schema.string.optional({ trim: true }, [rules.email()]),
    // age: schema.number.optional([rules.myRange(12, 150)]),
    // phone: schema.number.optional([rules.requiredIfNotExists('email')]),
    // location: schema.string({}, [rules.myLocation('india', 'usa')]),
    // password: schema.string([rules.myPassword(6)]),
    // addresses: schema.array().members(schema.object().members(
    //   {
    //     street: schema.string.optional(),
    //     city: schema.enum(['dun', 'tehri']),
    //     pincode: schema.number(),
    //   }
    // )),
    // location: schema.enum(['india', 'usa'])
    //age: schema.number.optional([rules.range(1, 200)]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    //these keys are names of the rules. or rule.field
    ...errorMessages,
    'email.required': 'email is required to signup!',
    'addresses.*.city.enum': 'The city must be a real city',
    'email.unique': 'This {{field}} already exists in database.'
  }
}
