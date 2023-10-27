import React from 'react';
import { Admin, Resource, ShowGuesser, EditGuesser } from "react-admin";
import { dataProvider } from './dataProvider';
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from './users';

const App = () => (
  <Admin dataProvider={dataProvider}>
 <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
     <Resource name="users" list={UserList} />
  </Admin>
);

export default App;