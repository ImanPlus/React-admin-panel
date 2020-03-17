import React from "react";
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    ShowButton,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    Edit,
    Create,
    Filter,
    Show,
    SimpleShowLayout,
    RichTextField,
    DateField,
    NumberField,
    CloneButton,
} from "react-admin";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/core/Avatar';
import {useMediaQuery} from "@material-ui/core";

import RichTextInput from 'ra-input-rich-text';

///--- Show Comment *** use expand in datagrid ---///

// const CommentPanel = ({ id, record, resource }) => (
//     <div dangerouslySetInnerHTML={{ __html: record.body }} />
// );

/*const CommentShow = props => (
    <Show
        {...props}
        /!* disable the app title change when shown *!/
        title=" "
    >
        <SimpleShowLayout>
            <RichTextField source="body"/>
        </SimpleShowLayout>
    </Show>
);*/

///--- Display List of Comments ---///
export const CommentList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down("sm"));
    return (
        <List filters={<CommentFilter/>} title="All comments"  {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record =>
                        new Date(record.published_at).toLocaleDateString()
                    }
                />
            ) : (
                //dar expand az CommentPanel ham mitoonim estafadeh konim..shekle sadeh tar hastesh.
                //... List using a datagrid ....
                {/*    <Datagrid expand={<CommentShow/>}>
                <TextField source="id"/>
                <ReferenceField label="Name" source="postId" reference="comments">
                    <TextField source="name"/>
                </ReferenceField>
                <TextField source="email"/>
                <DateField source="published_at"/>
                <BooleanField source="commentable"/>
                <EditButton/>
            </Datagrid>*/
                },
                    //... List using a custom iterator...
                    <CommentGrid/>
            )}
        </List>
    );
};

///--- Title in Comment page ---///
const CommentTitle = ({record}) => {
    return <span>Comment {record ? `"${record.name}"` : ""}</span>;
};
///--- Edit List ---///
export const CommentEdit = props => (
    <Edit title={<CommentTitle/>} {...props}>
        <SimpleForm>
            <TextInput disabled source="postId"/>
            <ReferenceInput source="postId" reference="comments">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="email"/>
            <RichTextInput source="body"/>
        </SimpleForm>
    </Edit>
);

///--- Create or Adding to List ---///
export const CommentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="postId" reference="posts">
                <SelectInput optionText="title"/>
            </ReferenceInput>
            <TextInput source="id"/>
            <TextInput source="name"/>
            <TextInput source="email"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Create>
);

///--- Search the list of posts ---///
const CommentFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn/>
        <ReferenceInput label="Name" source="body" reference="comments" allowEmpty>
            <SelectInput optionText="name"/>
        </ReferenceInput>
    </Filter>
);  

///--- View Comment ---///
export const CommentShow = (props) => (
    <Show title={<CommentTitle/>} {...props}>
        <SimpleShowLayout>
            <TextField source="name"/>
            <RichTextField source="body"/>
            <NumberField source="nb_views"/>
            <DateField label="Publication date" source="published_at"/>
        </SimpleShowLayout>
    </Show>
);

///--- List using a custom Iterator ---///
const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};

const CommentGrid = ({ids, data, basePath}) => (
    <div style={{margin: '1em'}}>
        {ids.map(id =>
            <Card key={id} style={cardStyle}>
                <CardHeader
                    title={<TextField record={data[id]} source="name"/>}
                    subheader={<DateField record={data[id]} source="published_at"/>}
                    avatar={<Avatar icon={<PersonIcon/>}/>}
                />
                <CardContent>
                    <TextField record={data[id]} source="body"/>
                </CardContent>
                <CardContent>
                    about&nbsp;
                    <ReferenceField label="Post" resource="comments" record={data[id]} source="post_id"
                                    reference="posts" basePath={basePath}>
                        <TextField source="name"/>
                    </ReferenceField>
                </CardContent>
                <CardActions style={{textAlign: 'right'}}>
                    <EditButton resource="comments" basePath={basePath} record={data[id]}/>
                    <ShowButton resource="comments" basePath={basePath} record={data[id]}/>
                    <CloneButton resource="comments" basePath={basePath} record={data[id]}/>
                </CardActions>
            </Card>
        )}
    </div>
);
CommentGrid.defaultProps = {
    data: {},
    ids: [],
};
