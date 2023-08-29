import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'customDate', async: false })
export class CustomDateValidator implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const regex = /^\d{4}-\d{2}-\d{2}$/; // Define your desired date format regex
    return regex.test(value);
  }

  defaultMessage(args: ValidationArguments) {
    return 'Invalid date format. Should be in YYYY-MM-DD format.';
  }
}
