import React from "react";
import Auxiliry from "../../hoc/Auxiliry";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = {
    showsideDrawer: false
  };

  sideDrawerClosedHeandler = () => {
    this.setState({ showsideDrawer: false });
  };
  showsideDrawerHandler = () => {
    this.setState({ showsideDrawer: true });
  };

  render() {
    return (
      <Auxiliry>
        <Toolbar showsideDrawer={this.showsideDrawerHandler} />
        <SideDrawer
          open={this.state.showsideDrawer}
          closed={this.sideDrawerClosedHeandler}
        />

        <main className={classes.content}>{this.props.children}</main>
      </Auxiliry>
    );
  }
}

export default Layout;
