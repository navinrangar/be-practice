const errorMessages = {
    required: 'Please fill {{field}} value. Its required.',
    email: '{{field}} is not valid. Please enter a valid email.',
    range: 'Please keep {{field}} in range of {{options.start}} to {{options.stop}}.',
    number: 'Please fill a valid number in {{field}}',
    array: '{{field}} must be an array',
    unique: '{{field}} must be unique.',
    string: 'Please fill a valid string in {{field}}',
    enum: `{{field}} must be either {{options.choices[0]}} or {{option.choices[1]}}`,
    myLocation: `{{field}} must be in range`,
}

export default errorMessages;