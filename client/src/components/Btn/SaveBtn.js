import { Button } from "@material-ui/core";
import { Toolbar, SaveButton } from "react-admin";
import { FormContext } from "../PostCreate";
import React from "react";

export default function SaveBtn(props) {
  const [validationStatus] = React.useContext(FormContext)

  if (validationStatus) {
    return (
      <Toolbar {...props}>
        <SaveButton
          type="button"
          submitOnEnter={false}
        />
      </Toolbar>
    );
  }
  return (
    <Button onClick={() => alert("Error")} variant="contained" color="primary"  >
        Save
    </Button>
  );
}
