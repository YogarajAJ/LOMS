import React, { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { menuItems } from "@/constants/MenuItems";

export default function SideNav() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      position="relative"
      sx={{
        width: 60, // always reserve 60px
        height: "100vh",
      }}
    >
      {/* Collapsed Sidebar (always visible) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: hovered ? 200 : 60,
          height: "100%",
          backgroundColor: "#f5f5f5",
          transition: "width 0.3s",
          zIndex: 1000,
          borderRight: "1px solid #e0e0e0",
          overflowX: "hidden",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <List>
          {menuItems.map((item) => {
            const selected = location.pathname === item.path;
            return (
              <Tooltip
                key={item.path}
                title={!hovered ? item.label : ""}
                placement="right"
              >
                <ListItemButton
                  selected={selected}
                  onClick={() => navigate(item.path)}
                  sx={{
                    justifyContent: hovered ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: hovered ? 2 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {hovered && <ListItemText primary={item.label} />}
                </ListItemButton>
              </Tooltip>
            );
          })}
        </List>
      </Box>
    </Box>
  );
}
