import React, { useState } from "react";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import { Badge, Drawer, List, ListItem } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import SearchBar from "./SearchBar";

import clsx from "clsx";

const useStyles = makeStyles({
  largeIcon: {
    fontSize: "1.9rem !important",
  },
  drawer: {
    "& > .MuiDrawer-paperAnchorRight": {
      left: 0,

      boxShadow: "0 0.1rem 0.4rem rgb(0 0 0 .1)",
      background: "rgba(255, 255, 255, 1)",
      color: "#000",
      padding: 0,

      height: "100%",
      "& ul": {
        padding: 0,
        width: "100% !important",
        height: "100%",
        position: "relative",
        "& .navIcon": {
          fontSize: "1.9rem",
          color: "#000",
        },
        "& .menuIcon": {
          fontSize: "1.9rem",
          color: "#000",
        },
        "& .mCIcon": {
          fontSize: "1.9rem",
          color: "#000",
          marginRight: "3rem",
        },
        "& .menuContainer": {
          marginTop: "4.5rem",
          marginRight: "-3rem",
          paddingBottom: "3.5rem",
        },
        "& .menuItem": {
          background: "inherit",
          color: "inherit",
          fontSize: "initial",
          borderRadius: "unset",
          boxShadow: "none",
          marginBottom: "3.5rem",
          "@media (max-width: 420px)": {
            marginBottom: "2rem",
          },
        },
        "& .menuItemHeader": {
          fontSize: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: 600,
          padding: "1rem",
          paddingRight: "3rem",
          "@media (max-width: 420px)": {
            fontSize: "1.5rem",
          },
        },
        "& .menuItemContent": {
          fontSize: "2.2rem",
          fontWeight: 400,
          paddingTop: "1rem",
          paddingLeft: "1.8rem",
          "@media (max-width: 420px)": {
            fontSize: "1.8rem",
          },
        },
        "& .contentList": {
          marginBottom: "2.5rem",
          padding: "1.1rem",
          display: "block",
          "@media (max-width: 420px)": {
            marginBottom: "1.5rem",
          },
        },
        "& .link:focus-within": {
          backgroundColor: "rgba(240, 240, 240, 1) !important",
        },
        "& .sidebarBottom": {
          marginTop: "8rem",
          marginBottom: 0,
        },
        "& .searchBar": {
          marginTop: "2.8rem",
          padding: "0.5rem 2.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "0.01rem solid #000",
          borderRadius: "8rem",
          "& .searchInput": { fontSize: "1.7rem", color: "inherit" },
          "& .searchIcon": { width: "2.6rem", height: "2.6rem", color: "#000" },
          "& customButton": { minWidth: "unset" },
        },
        "& .mTopMenu": {
          marginTop: "3.5rem",
        },
        "& .MuiBadge-root": {
          "& > .MuiBadge-badge": {
            top: "10%",
            right: "-35%",
            height: "2.1rem",
            minWidth: "2.1rem",
            fontSize: "1.2rem",
            border: "0.1rem solid rgb(233, 233, 233)",
            background: "rgb(119, 80, 80)",
            fontWeight: 700,
          },
        },
      },
      "& ul > li": {
        padding: "0 3rem",
        height: "100%",
        display: "block",
      },
    },
  },
});

export default function SideMenu() {
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <AiOutlineMenu
        className={clsx(classes.largeIcon, "cursor-pointer")}
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      <Drawer anchor={"right"} open={isDrawerOpen} className={classes.drawer}>
        <List classes={classes.ulStyle}>
          <ListItem
            style={{
              top: 0,
              zIndex: 100,
              height: "fit-content",
              position: "sticky",
              background: "rgba(255, 255, 255, 1)",
              paddingTop: "3rem",
              paddingBottom: "2rem",
            }}
          >
            <div className="navigationContainer flex justify-between items-center">
              <div className="w-full flex items-center justify-between">
                <div className="w-full">
                  <SearchBar />
                </div>
                <div className="w-12  ml-8">
                  <GrClose
                    className="navIcon cursor-pointer"
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  />
                </div>
              </div>
            </div>
          </ListItem>
          <ListItem>
            <ListItem>
              <div className="flex flex-col justify-between h-48">
                <Link href="/" passHref={true}>
                  <p className="font-bold"> Home</p>
                </Link>
                <Link href="/" passHref={true}>
                  <p className="font-bold">Contact</p>
                </Link>
                <Link href="/" passHref={true}>
                  <p className="font-bold">About</p>
                </Link>
                <Link href="/" passHref={true}>
                  <p className="font-bold">Article</p>
                </Link>
              </div>
            </ListItem>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
