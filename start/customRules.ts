
import { validator } from "@ioc:Adonis/Core/Validator"

validator.rule('myRange', (value, args: [number, number], { pointer, arrayExpressionPointer, errorReporter }) => {
    if (value < args[0] || value > args[1]) {
        errorReporter.report('myRange', pointer, 'myrange failed', arrayExpressionPointer, { start: args[0], end: args[1] });
    }
})

validator.rule('myLocation', (value, args: string[], { pointer, arrayExpressionPointer, errorReporter }) => {
    if (!(value.toLowerCase() === args[0] || value.toLowerCase() === args[1])) {
        errorReporter.report('myLocation', pointer, `${pointer} is not supported`, arrayExpressionPointer, args);
    }
})

validator.rule('myPassword', (value, args: [number], { pointer, arrayExpressionPointer, errorReporter }) => {
    if (value.toString().length > args[0]) {
        errorReporter.report('myPassword', pointer, `${pointer} must contain more than ${args[0]} characters.`, arrayExpressionPointer, args);
    }
})








/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
