import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import ComponentsBox from '../../components/common/box/componentsBox';
import ComponentsTypography from '../../components/common/typography/componentsTypography';
import ComponentsTextField from '../../components/common/textField/componentsTextField';
import ComponentsButton from '../../components/common/button/componentsButton';

import {
  ValidateEmail,
  ValidatePassword,
} from '../../helpers/validation/validation';

import {colorError} from '../../constants/color/colors';

import '../../styles/views/signup/signupStyles.css';

const SignupViews = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const [errorSingup, setErrorSingup] = useState<boolean>(false);
  const [errorSingupText, setErrorSingupText] = useState<string>('');

  const submit = () => {
    if (email && !emailError && password && !passwordError) {
      handlerRedirect();
    }
  };

  const handlerRedirect = () => {
    navigate('/login');
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
        text={'Create Account'}
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
        helperText='8 characters, one capital letter, one number and one special character minimum'
      />

      {errorSingup && errorSingupText ? (
        <div className='marginError'>
          <ComponentsTypography
            variant={'body2'}
            textAlign={'center'}
            text={errorSingupText}
            color={colorError}
          />
        </div>
      ) : null}

      <ComponentsButton
        submit={() => submit()}
        disabled={emailError || passwordError ? true : false}
        text={'create'}
      />

      <div className='ButtonCentered line connection'>
        <p onClick={handlerRedirect}>login</p>
      </div>
    </ComponentsBox>
  );
};

export default SignupViews;
