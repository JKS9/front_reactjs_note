import {TextField} from '@mui/material';

const ComponentsTextField = (props: any) => {
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
    />
  );
};

export default ComponentsTextField;
