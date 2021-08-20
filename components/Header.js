import Link from "next/link";
import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Image from "next/image";
import logoPic from "./logo.png";

const Header = () => {
  const drawerWidth = 240;
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <header>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: false,
          })}
        >
          <Toolbar style={{ paddingLeft: "120px" }}>
            {/* <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button> */}

            <Image src={logoPic} alt="HSQL Logo" width="50px" height="50px" />

            <Typography variant="h6" noWrap align="center">
              HSQL Documentation Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
    </div>
  );
};

export default Header;
// new header
//    {/*  */}
//    <AppBar
//    position="fixed"
//    className={clsx(classes.appBar, {
//      [classes.appBarShift]: open,
//    })}
//  >
//    <Toolbar>
//      <Button variant="outlined">Outlined</Button>
//      <Button variant="text">Text</Button>

//      <IconButton
//        color="inherit"
//        aria-label="open drawer"
//        onClick={handleDrawerOpen}
//        edge="end"
//        className={clsx(classes.menuButton, open && classes.hide)}
//      >
//        {/* <MenuIcon /> */}
//      </IconButton>
//      <Typography variant="h6" noWrap>
//        HSQL Documentation Persistent drawer
//      </Typography>
//    </Toolbar>
//  </AppBar>

// old header
// HSQL - SQL like language for HPCC Systems.
// <Link href="/about">
//   <a style={headerStyle}>About</a>
// </Link>
// <Link href="/blog">
//   <a style={headerStyle}>Blog</a>
// </Link>
// <Link href="/">
//   <a style={headerStyle}>Index</a>
// </Link>
// <hr></hr>
