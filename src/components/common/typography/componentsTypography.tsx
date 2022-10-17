import {Typography} from '@mui/material';
import {IComponentsTypography} from '../../../types/components/interfaceComponents';

const ComponentsTypography = (props: IComponentsTypography) => {
  return (
    <Typography
      variant={props.variant}
      textAlign={props.textAlign}
      color={props.color}
    >
      {props.text}
    </Typography>
  );
};

export default ComponentsTypography;
