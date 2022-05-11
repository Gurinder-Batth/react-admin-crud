import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput, BooleanInput } from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput multiline source='body' />
        <DateInput label='Published' source='publishedAt' />
        <BooleanInput label="Publish" source="publish" />
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit
