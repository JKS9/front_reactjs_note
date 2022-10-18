import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import ComponentsBox from '../../components/common/box/componentsBox';
import ComponentsTypography from '../../components/common/typography/componentsTypography';
import ComponentsTextField from '../../components/common/textField/componentsTextField';
import ComponentsButton from '../../components/common/button/componentsButton';

import {colorError} from '../../constants/color/colors';

import {
  ValidateEmail,
  ValidatePassword,
} from '../../helpers/validation/validation';

const LoginViews = (props: any) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  const [errorLoginText, setErrorLoginText] = useState<string>('');

  const handlerLogin = () => {
    console.log('token', email + ':' + password);

    setErrorLogin(true);
    setErrorLoginText('Incorrect email or password');

    //sessionStorage.setItem('Auth Token', email + ':' + password);
    //props.login();
    //navigate('/');
  };

  const handlerRedirect = () => {
    navigate('/');
  };

  const onChangeEmail = (value: string) => {
    const regexJoi = ValidateEmail(value);

    if (!regexJoi) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
    setEmail(value);
    return;
  };

  const onChangePassword = (value: string) => {
    const regexJoi = ValidatePassword(value);

    if (!regexJoi) {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);
    setPassword(value);
    return;
  };

  return (
    <ComponentsBox
      width={400}
      margin={'6em auto 0 auto'}
    >
      <ComponentsTypography
        variant={'h1'}
        textAlign={'center'}
        text={'Note'}
      />
      <ComponentsTypography
        variant={'h4'}
        textAlign={'center'}
        text={'Sign in to your account'}
      />

      <ComponentsTextField
        error={emailError}
        label={'Email'}
        inputProps={{
          type: 'text',
        }}
        onChange={(e: string) => onChangeEmail(e)}
      />

      <ComponentsTextField
        error={passwordError}
        label={'Password'}
        inputProps={{
          type: 'password',
        }}
        onChange={(e: string) => onChangePassword(e)}
      />

      {errorLogin && errorLoginText ? (
        <div className='marginError'>
          <ComponentsTypography
            variant={'body2'}
            textAlign={'center'}
            text={errorLoginText}
            color={colorError}
          />
        </div>
      ) : null}

      <ComponentsButton
        submit={() => handlerLogin()}
        text={'Sign in'}
      />

      <div className='ButtonCentered line connection'>
        <p onClick={handlerRedirect}>Register</p>
      </div>
    </ComponentsBox>
  );
};

export default LoginViews;
