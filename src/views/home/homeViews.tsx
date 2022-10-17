import {Button} from '@mui/material';

const HomeViews = (props: any) => {
  return (
    <div>
      <Button onClick={props.logout}>Log out</Button>
    </div>
  );
};

export default HomeViews;
