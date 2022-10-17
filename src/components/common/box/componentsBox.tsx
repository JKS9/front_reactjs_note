import {Box} from '@mui/material';

const ComponentsBox = (props: any) => {
  return (
    <Box
      sx={{
        width: props.width,
        margin: props.margin,
      }}
    >
      {props.children}
    </Box>
  );
};

export default ComponentsBox;
