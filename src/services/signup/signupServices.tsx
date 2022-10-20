import ApiSignup from '../../api/public/signup/apiSignup';

import {
  ValidateEmail,
  ValidatePassword,
} from '../../helpers/validation/validation';

import {ERROR_TEXT_IDENTITY} from '../../constants/message/message';

import {IDataAuthuser} from '../../types/services/interfaceServices';

const SignupServices = async (email: string, password: string) => {
  const checkedEmail: boolean = await ValidateEmail(email);
  const checkedPassword: boolean = await ValidatePassword(password);

  if (!checkedEmail || !checkedPassword) {
    return {
      error: true,
      message: ERROR_TEXT_IDENTITY,
    };
  }

  const data: IDataAuthuser = {
    _email: email,
    _password: password,
  };

  const {error, checked, message} = await ApiSignup(data);

  if (error === true && checked === false) {
    return {
      error: true,
      message: message,
    };
  }

  return {
    error: false,
    message: message,
  };
};

export default SignupServices;
