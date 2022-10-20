import ApiLogin from '../../api/public/login/apiLogin';

import {
  ValidateEmail,
  ValidatePassword,
} from '../../helpers/validation/validation';

import {ERROR_TEXT_IDENTITY} from '../../constants/message/message';

import {IDataAuthuser} from '../../types/services/interfaceServices';

const LoginServices = async (email: string, password: string) => {
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

  const {error, checked, resultData} = await ApiLogin(data);

  if (error === true && checked === false) {
    return {
      error: true,
      message: ERROR_TEXT_IDENTITY,
    };
  }

  if (checked === true && resultData.accessToken && resultData.refreshToken) {
    sessionStorage.setItem('accessToken', resultData.accessToken);
    sessionStorage.setItem('refreshToken', resultData.refreshToken);

    return {
      error: false,
      message: '',
    };
  }

  return {
    error: true,
    message: ERROR_TEXT_IDENTITY,
  };
};

export default LoginServices;
