import React, { useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  BooleanInput,
  Toolbar,
  SaveButton,
  ShowButton,
} from "react-admin";
import Button from "@mui/material/Button";

import Fields from "./Form/Fields";
import SaveBtn from "./Btn/SaveBtn";
import FieldContainer from "./FieldContainer";

export const FormContext = React.createContext();

const PostCreate = (props) => {
  const [validationStatus, setValidationStatus] = React.useState(true);

  const changeValidationStatus = (flag) => {
    setValidationStatus(flag);
  };

  const transformUser = (data) => ({
    ...data,
    fullbody: `${data.title} ${data.body}`,
  });

  const validateUserCreation = (values) => {
    const errors = {};
    // errors.firstName = '';
    return errors;
  };

  return (
    <div>
      <div>
        <FormContext.Provider
          value={[validationStatus, changeValidationStatus]}
        >
          <Create title="Create a Post" {...props}>
            <SimpleForm validate={validateUserCreation} toolbar={<SaveBtn />}>
              <FieldContainer />
            </SimpleForm>
          </Create>
        </FormContext.Provider>
      </div>
    </div>
  );
};

export default PostCreate;
