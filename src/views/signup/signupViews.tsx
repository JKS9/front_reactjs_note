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

import '../../styles/views/signup/signupStyles.css';

const SignupViews = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);

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
        text={'Inscription'}
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

      <ComponentsButton
        submit={() => submit()}
        disabled={emailError || passwordError ? true : false}
        text={'inscription'}
      />

      <div className='ButtonCentered line connection'>
        <p onClick={handlerRedirect}>Connexion</p>
      </div>
    </ComponentsBox>
  );
};

export default SignupViews;
