import {Button} from '@mui/material';
import {IComponentsButton} from '../../../types/components/interfaceComponents';

const ComponentsButton = (props: IComponentsButton) => {
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
