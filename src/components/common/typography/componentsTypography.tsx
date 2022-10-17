import {Typography} from '@mui/material';

const ComponentsTypography = (props: any) => {
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
