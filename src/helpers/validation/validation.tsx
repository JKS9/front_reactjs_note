import {REGEX_EMAIL, REGEX_PASSWORD} from '../../constants/regex/regex';

export const ValidateEmail = async (email: string) => {
  const validateEmailRegex: RegExp = REGEX_EMAIL;

  const value: boolean = validateEmailRegex.test(email);
  if (!value) {
    return false;
  }

  return true;
};

export const ValidatePassword = async (password: string) => {
  const validatePasswordRegex: RegExp = REGEX_PASSWORD;

  const value: boolean = validatePasswordRegex.test(password);
  if (!value) {
    return false;
  }

  return true;
};
