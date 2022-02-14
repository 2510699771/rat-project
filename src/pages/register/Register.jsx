import React, { Component } from 'react';

export default class Register extends Component {
  egister = () => {
    console.log(this.props);
    // this.props.history.push('/login'); //会保留历史记录
    this.props.history.replace('/home');//不会保留历史记录
  }
  render() {
    return <div>
      <button onClick={this.egister}>注册</button>
    </div>;
  }
}
