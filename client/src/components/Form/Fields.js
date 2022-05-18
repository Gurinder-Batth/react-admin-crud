import React, { useEffect } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  BooleanInput,
  ArrayInput,
  SimpleFormIterator,
  FormDataConsumer,
} from "react-admin";
import { FormContext } from "../PostCreate";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Grid, TextField } from "@material-ui/core";

export default function Fields() {
  const [validationStatus, changeValidationStatus] =
    React.useContext(FormContext);
  const [open, setOpen] = React.useState(false);
  const [publishState, setPublishState] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const agree = () => {
    setPublishState((prev) => {
      return !prev;
    });
    setOpen(false);
  };

  useEffect(() => {
    changeValidationStatus(publishState);
  }, [publishState]);

  const changePublish = () => {
    return publishState;
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={12}>

        <ArrayInput source="authors">
            <SimpleFormIterator >
                    {/* <TextInput fullWidth label={"First Name"} placeholder="First Name" source="fname" /> */}
                    <FormDataConsumer>
                        {({ getSource, scopedFormData  }) => {
                            return (
                              <>
                                <Grid container spacing={2}>
                                  <Grid item xs={6}>
                                      <TextInput
                                          fullWidth
                                          placeholder="First Name"
                                          label={"First Name"}
                                          source={getSource('fname')}
                                          record={scopedFormData}
                                      />
                                  </Grid>
                                  <Grid item xs={6}>
                                      <TextInput
                                        fullWidth
                                        label={"Last Name"}
                                        placeholder="Last Name"
                                        source={getSource('lname')}
                                        record={scopedFormData}
                                      />
                                  </Grid>
                                </Grid>
                              </>
                            );
                        }}
                    </FormDataConsumer>
            </SimpleFormIterator>
        </ArrayInput>

        </Grid>

        
        <TextInput fullWidth source="title" />
      <TextInput fullWidth multiline source="body" />

        <Grid item md={12}>
          <DateInput fullWidth label="Published" source="publishedAt" />
        </Grid>
        <Grid item md={12}>
          <BooleanInput
            label="Publish"
            onClick={handleClickOpen}
            defaultValue={setPublishState}
            //  parse={changePublish}
            format={changePublish}
            source="publish"
          />
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={agree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
