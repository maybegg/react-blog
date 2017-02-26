import './app/lib/jquery/jquery.js';
import './app/lib/bootstrap/dist/css/bootstrap.css';
import './app/css/reset.min.css';
import './app/css/public.css';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Header,Home, AllArticleList,SignUp,SignIn,AddArticle,DetailArticle} from './app/component/';
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' components={Header}>
            <IndexRoute components={Home}/>
            <Route path='home' components={Home}/>
            <Route path='list' components={AllArticleList}/>
            <Route path='signup' components={SignUp}/>
            <Route path='signin' components={SignIn}/>
            <Route path='addArticle/:id' components={AddArticle}/>
            <Route path='detail/:id' components={DetailArticle}/>
        </Route>
    </Router>,
    document.getElementById('container')
);