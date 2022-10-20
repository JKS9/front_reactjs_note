import axios from 'axios';

import {IDataAuthuser} from '../../../types/services/interfaceServices';

import {
  ERROR_API,
  CREATE_TEXT_SINGUP_IDENTITY,
} from '../../../constants/message/message';

const REACT_APP_URL_API =
  process.env.REACT_APP_URL_API || 'http://localhost:9000/';

const ApiLogin = async (data: IDataAuthuser) => {
  try {
    const res = await axios.post(REACT_APP_URL_API + 'auth/login', data);

    console.log('res', res);

    return {
      error: false,
      checked: true,
      resultData: res.data,
    };
  } catch (e: any) {
    console.log('e', e);
    return {
      error: true,
      checked: false,
      message: e.response.data.message,
    };
  }
};

export default ApiLogin;
