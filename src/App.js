import React from "react";
import {Admin, Resource} from "react-admin";
import dataProvider from "./dataProvider";

import {UserList, UserShow} from "./Users";
import {PostList, PostEdit, PostCreate, PostShow} from "./Posts";
import {CommentList, CommentEdit, CommentCreate, CommentShow} from "./Comments";
import {TagCreate, TagList, TagEdit} from "./tags";

import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";

import theme from "./Theme";

import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import LabelIcon from '@material-ui/icons/Label';

const App = () => (
    <Admin
        title="My Custom Admin"
        dashboard={Dashboard}
        authProvider={authProvider}
        dataProvider={dataProvider}
        catchAll={NotFound}
        theme={theme}
    >
        <Resource
            name="posts"
            options={{label: 'مطالب Posts'}}
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
            icon={PostIcon}
            show={PostShow}

        />
        <Resource name="users" list={UserList} icon={UserIcon} show={UserShow}/>
        <Resource
            name="comments"
            list={CommentList}
            edit={CommentEdit}
            create={CommentCreate}
            icon={ChatBubbleIcon}
            show={CommentShow}
        />
        <Resource
            name="tags"
            list={TagList}
            create={TagCreate}
            icon={LabelIcon}
            edit={TagEdit}
        />
    </Admin>
);

export default App;
