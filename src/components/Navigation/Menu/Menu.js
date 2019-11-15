import React from "react";
import classes from "./Menu.css";

const Menu = props => {
  return (
    <div className={classes.DrawerToggle} onClick={props.showSideDrawer}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default Menu;
