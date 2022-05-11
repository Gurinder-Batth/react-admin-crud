import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, BooleanInput } from 'react-admin'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const PostCreate = (props) => {

  const [open, setOpen] = React.useState(false);
  const [publishState, setPublishState] = React.useState(true);


  const handleClickOpen = () => {
    setPublishState( (prevPublishState) => { return !prevPublishState});
    setOpen(true);
  };


  const agree = () => {
    setOpen(false);
  };

  const disagree = () => {
    setPublishState( (prevPublishState) => { return !prevPublishState});
    setOpen(false);
  };

  const changePublish = (data,data2) => {
    return publishState
  }

  return (
    <div>
      <div>

    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />
        <BooleanInput 
         label="Publish" 
         onClick={handleClickOpen}
         defaultValue={true}
         format={changePublish}
         source="publish" />
      </SimpleForm>
    </Create>

      
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={disagree}>Disagree</Button>
          <Button onClick={agree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    </div>
  )
}

export default PostCreate
