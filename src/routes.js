import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home';
import Post from './Components/Post/Post';
import TopicList from './Components/TopicList/TopicList';


export default (
    <Switch>
        <Route component={Post} path='/topics/:id' />
        <Route component={TopicList} path='/topics' />
        <Route component={Home} exact path='/' />
    </Switch>
)