import {REGEX_EMAIL, REGEX_PASSWORD} from '../../constants/regex/regex';

export const ValidateEmail = (email: string) => {
  const validateEmailRegex = REGEX_EMAIL;

  const value = validateEmailRegex.test(email);
  if (!value) {
    return false;
  }

  return true;
};

export const ValidatePassword = (password: string) => {
  const validatePasswordRegex = REGEX_PASSWORD;

  const value = validatePasswordRegex.test(password);
  if (!value) {
    return false;
  }

  return true;
};
