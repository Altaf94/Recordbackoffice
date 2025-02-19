import React from "react";
import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 256,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 256,
  },
}));

export const NavBar = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      classes={{ paper: classes.drawerPaper }}
    >
      <div>
        {/* Add your navigation items here */}
        <button onClick={onClose}>Close</button>
      </div>
    </Drawer>
  );
};
