export class  ValidationHelper {
  public static GetErrors(err): Array<string> {
    const errors: Array<string> = [];
    if (err.status === 400) {
      const validationErrorDictionary = err.error;
      for (const fieldName in validationErrorDictionary) {
        if (validationErrorDictionary.hasOwnProperty(fieldName)) {
          errors.push(validationErrorDictionary[fieldName]);
        }
      }
    } else {
      errors.push('something went wrong!');
    }
    return errors;
  }
}
