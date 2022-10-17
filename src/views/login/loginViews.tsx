import {useNavigate} from 'react-router-dom';
import {Button} from '@mui/material';

const LoginViews = (props: any) => {
  const navigate = useNavigate();

  const handlerLogin = (token: string) => {
    console.log('token', token);

    sessionStorage.setItem('Auth Token', token);

    props.login();
    navigate('/');
  };

  return (
    <div>
      <Button onClick={() => handlerLogin('etienne')}>Login</Button>
    </div>
  );
};

export default LoginViews;
