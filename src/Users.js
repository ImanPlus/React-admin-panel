import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    TextInput,
    SimpleList,
    EditButton,
    ShowButton,
    Show,
    SimpleShowLayout,
} from "react-admin";
import MyUrlField from "./MyUrlField";
import {makeStyles} from '@material-ui/core';
import {Filter} from "@material-ui/icons";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
    row: {
        backgroundColor: '#ccc',
    },
});

/*export const UserList = props => {
    console.log(props);
    const classes = useStyles();
    return (
        <List {...props}>
            <Datagrid rowClick="edit" classes={{row: classes.row}}>
                <TextField source="id"/>
                <TextField source="name"/>
                <EmailField source="email"/>
                <TextField source="phone"/>
                {/!*<TextField source="website"/>*!/}
                {/!*<UrlField source="website"/>*!/}
                <MyUrlField source="website"/>
                <TextField source="company.name"/>
            </Datagrid>
        </List>
    );
};*/

const UserFilter = ({permissions, ...props}) =>
    <Filter {...props}>
        <TextInput
            label="user.list.search"
            source="q"
            alwaysOn
        />
        <TextInput source="name"/>
        {permissions === 'admin' ? <TextInput source="role"/> : null}
    </Filter>;

export const UserList = ({permissions, ...props}) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List
            {...props}
            filters={<UserFilter permissions={permissions} {...props} />}
            sort={{field: 'name', order: 'ASC'}}
        >
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record =>
                        permissions === 'admin' ? record.role : null}
                />
            ) : (
                <Datagrid>
                    <TextField source="id"/>
                    <TextField source="name"/>
                    {permissions === 'admin' && <TextField source="role"/>}
                    {permissions === 'admin' && <EditButton/>}
                    <ShowButton/>
                </Datagrid>
            )}
        </List>
    )
}

///--- View user ---///
export const UserShow = (props) => (
    <Show title={<UserTitle/>} {...props}>
        <SimpleShowLayout>
            <TextField source="name"/>
            <TextField source="username"/>
            <EmailField source="email"/>
            <TextField source="website"/>
            <TextField source="phone"/>
        </SimpleShowLayout>
    </Show>
);
///--- Title in User page ---///
const UserTitle = ({record}) => {
    return <span>User {record ? `"${record.name}"` : ""}</span>;
};