import {TextField} from '@mui/material';
import {IComponentsTextField} from '../../../types/components/interfaceComponents';

const ComponentsTextField = (props: IComponentsTextField) => {
  return (
    <TextField
      error={props.error}
      id='outlined-error'
      label={props.label}
      fullWidth
      size='small'
      inputProps={props.inputProps}
      style={{margin: '1em 0em 0em 0em'}}
      onChange={(e) => props.onChange(e.target.value)}
      helperText={props.helperText}
    />
  );
};

export default ComponentsTextField;
