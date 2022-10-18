import {useNavigate} from 'react-router-dom';

import ComponentsBox from '../../components/common/box/componentsBox';
import ComponentsTypography from '../../components/common/typography/componentsTypography';
import ComponentsButton from '../../components/common/button/componentsButton';

const NotFoundViews = () => {
  const navigate = useNavigate();

  const handlerRedirecty = () => {
    navigate('/');
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
        text={'PAGE NOT FOUND'}
      />

      <ComponentsButton
        submit={() => handlerRedirecty()}
        disabled={false}
        text={'Home'}
      />
    </ComponentsBox>
  );
};

export default NotFoundViews;
