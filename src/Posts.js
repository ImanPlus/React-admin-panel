import React from 'react';
import {
    List,
    SimpleList,
    SimpleShowLayout,
    RichTextField,
    NumberField,
    DateField,
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
    TabbedShowLayout,
    Tab,
    BooleanField,
    ReferenceManyField,
    ChipField,
    SingleFieldList,
    ArrayField,
    ReferenceArrayField,
    DateInput,
    TopToolbar,
    CloneButton,
    NumberInput,
} from 'react-admin';
import {useMediaQuery} from '@material-ui/core';
import Button from '@material-ui/core/Button';

///--- Display List ---///
export const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters={<PostFilter/>} title="List of posts"  {...props} >
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                    linktype="show"
                />
            ) : (
                <Datagrid>
                    <TextField source="id"/>
                    <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="name"/>
                    </ReferenceField>
                    <TextField source="title"/>

                    <DateField source="published_at"/>
                    //--*-*-*-*-*-*-*- Show Tags in post *-*-*-*-*-*-*-*-*-
                    <ReferenceArrayField label="Tags" reference="tags" source="tag_ids">
                        <SingleFieldList>
                            <ChipField source="name" />
                        </SingleFieldList>
                    </ReferenceArrayField>
                    //--*-*-*-*-*-*-*-*- Show Comments in post  -*-*-*-*-*-*-*-*-
                    <ReferenceManyField label="Comments by" reference="comments" target="postId">
                        <SingleFieldList>
                            <ChipField source="name" />
                        </SingleFieldList>
                    </ReferenceManyField>
                    //--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
                    <NumberField source="nb_views"/>
                    <EditButton/><ShowButton/> <CloneButton />
                </Datagrid>
            )}
        </List>
    );
}
///--- Actions on top ---///
const PostEditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ShowButton basePath={basePath} record={data} />
        {/* Add your custom actions */}
        {/*<Button color="primary" onClick={<}>List</Button>*/}
    </TopToolbar>
);

///--- Title in edit page ---///
const PostTitle = ({record}) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};
///--- Edit List ---///
export const PostEdit = props => (
    <Edit title={<PostTitle/>} Action={<PostList/>} successMessage=".ویرایش انجام شد" {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Edit>
);

///--- Create or Adding to List ---///
const postDefaultValue = { nb_views: 0 };
export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm initialValues={postDefaultValue}>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <TextInput multiline source="body"/>

            <ReferenceInput source="tagId" reference="tags">
                <SelectInput optionText="name"/>
            </ReferenceInput>

            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
            <NumberInput source="nb_views"/>
        </SimpleForm>
    </Create>
);

///--- Search the list of posts ---///
const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn/>
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name"/>
        </ReferenceInput>
    </Filter>
);

///--- View Post ---///
/*
export const PostShow = (props) => (
    <Show title={<PostTitle/>} {...props}>
        <SimpleShowLayout>
            <TextField source="title"/>
            <RichTextField source="body"/>

            <NumberField source="nb_views"/>
            <DateField label="Publication date" source="created_at"/>
        </SimpleShowLayout>
    </Show>
);*/

export const PostShow = (props) => (
    <Show Action={<PostEdit/>} {...props}>
        <TabbedShowLayout>
            <Tab label="summary">
                <TextField label="Id" source="id"/>
                <TextField source="title"/>
                <TextField source="teaser"/>

                <ArrayField source="tags">
                    <SingleFieldList>
                        <ChipField source="name"/>
                    </SingleFieldList>
                </ArrayField>
            </Tab>
            <Tab label="body" path="body">
                <RichTextField source="body" addLabel={false}/>
            </Tab>
            <Tab label="Miscellaneous" path="miscellaneous">
                <TextField label="Password (if protected post)" source="password" type="password"/>
                <DateField label="Publication date" source="published_at"/>
                <NumberField source="average_note"/>
                <BooleanField label="Allow comments?" source="commentable" defaultValue/>
                <TextField label="Nb views" source="views"/>
            </Tab>
            <Tab label="comments" path="comments">
                <ReferenceManyField reference="comments" target="post_id" addLabel={false}>
                    <Datagrid>
                        <TextField source="body"/>
                        <DateField source="created_at"/>
                        <EditButton/>
                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>
    </Show>
);
