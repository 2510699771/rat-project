import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class HomeTop extends Component {
  nav = () => {
    console.log(this.props);
  }
  render() {
    return <div>HomeTop
      <button onClick={this.nav}>导航1</button>
    </div>;
  }
}
// withRouter为高阶组件
export default withRouter(HomeTop)