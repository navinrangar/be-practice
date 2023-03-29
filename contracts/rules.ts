

declare module '@ioc:Adonis/Core/Validator' {
 
    interface Rules {
        myRange(start: number, stop: number): Rule;
        myLocation(string[]): Rule;
        myPassword(max: number): Rule;
    }
  }
  