import "./Menu.css";
import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import Users from '../Users/Users';
import Posts from '../Posts/Posts';
import Photos from '../Photos/Photos';


function template() {
  return (
    <div >
      <HashRouter>
        <div>
          <div className="menu">
            <a href="#/Users">Users</a>
            <a href="#/Posts">Posts</a>
            <a href="#/Photos">Photos</a>
          </div>
         

          <Route path="/" exact Component={Users} />
          <Route path="/users" Component={Users} />
          <Route path="/posts" Component={Posts} />
          <Route path="/photos" Component={Photos} />

        </div>

      </HashRouter>
    </div >
  );
};

export default template;
