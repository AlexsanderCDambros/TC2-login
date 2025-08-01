import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Root(props) {
  return (
    <>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <section>{props.name} is mounted!</section>
    </>
  );
}
