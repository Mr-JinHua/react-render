import React, { Component } from "react";
import icon from '../assets/img/icon.png';

export default class Developer extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div className="Developer">
        <img src={ icon } alt="征哥、 张欣、 薛老板、 刘平章"/>
        征哥、 张欣、 薛老板、 刘平章
      </div>
    );
  }
}
