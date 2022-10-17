import {Box} from '@mui/material';
import {IComponentsBox} from '../../../types/components/interfaceComponents';

const ComponentsBox = (props: IComponentsBox) => {
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
