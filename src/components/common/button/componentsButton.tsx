import {Button} from '@mui/material';

const ComponentsButton = (props: any) => {
  return (
    <div className='ButtonCentered'>
      <Button
        onClick={props.submit}
        variant='contained'
        disabled={props.disabled}
      >
        {props.text}
      </Button>
    </div>
  );
};

export default ComponentsButton;
