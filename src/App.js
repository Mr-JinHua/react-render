/**
 * 返回一个基本的App
 */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { About, Topic, Topics } from "./pages/component";
import { ConnectedRouter } from "react-router-redux";
import router from "./router/route";
import axios from 'axios'
import "./assets/main.less";
import "./App.less";
import { Input } from 'antd';

const { Search } = Input;
const configRoute = router => {
  return (
    <div>
      {router.map((route, index) => (
        <Route
          key={index + "route-render"}
          path={route.path}
          exact={route.exact ? route.exact : false}
          component={route.component}
        />
      ))}
    </div>
  );
};

// axios.get('/api/usetest').then((data) => {
//   console.log(data, 'axios');
// })

const BasicExample = props => (
  <div className="app-container">
    <div>
      <header className="home-header">
        <div className="header-logo">
          {/* <img src={uselogo} alt="" /> */}
          <span className="">小章章</span>
        </div>
        <div className="header-search">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </div>
        <ul className="header-item">
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/topics">组件</Link>
          </li>
          <li>
            <Link to="/about">设计语言</Link>
          </li>
          <li>
            <Link to="/developer">团队</Link>
          </li>
        </ul>
      </header>
      {/* <hr /> */}
      {configRoute(router)}
    </div>
  </div>
);

export default BasicExample;
