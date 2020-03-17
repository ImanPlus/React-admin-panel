import React from 'react';
import {
    Create, SimpleForm, TextInput, TextField, Edit, List, Datagrid, EditButton, Toolbar, SaveButton,
    DeleteButton, CloneButton,
} from 'react-admin';
import {makeStyles} from '@material-ui/core/styles';

///--- List of Tags ---///
export const TagList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>

            <CloneButton />
            <EditButton/>
        </Datagrid>

    </List>
);

///--- Create or Adding to List ---///
export const TagCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id"/>
            <TextInput source="name"/>
        </SimpleForm>
    </Create>
);

///--- Edit List ---///
export const TagEdit = props => (
    <Edit  {...props}>
        <SimpleForm toolbar={<CustomToolbar/>}>
            <TextInput source="id"/>
            <TextInput source="name"/>
        </SimpleForm>
    </Edit>
);

///--- dialog for the Delete button in Edit List ---///
const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

const CustomToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton/>
        <DeleteButton undoable={false}/>
    </Toolbar>
);

