import axios from 'axios';

import {IDataAuthuser} from '../../../types/services/interfaceServices';

import {
  ERROR_API,
  CREATE_TEXT_SINGUP_IDENTITY,
} from '../../../constants/message/message';

const REACT_APP_URL_API =
  process.env.REACT_APP_URL_API || 'http://localhost:9000/';

const ApiSignup = async (data: IDataAuthuser) => {
  try {
    await axios.post(REACT_APP_URL_API + 'auth/signup', data);

    return {
      error: false,
      checked: true,
      message: CREATE_TEXT_SINGUP_IDENTITY,
    };
  } catch (e: any) {
    return {
      error: true,
      checked: false,
      message: e.response.data.message,
    };
  }
};

export default ApiSignup;
