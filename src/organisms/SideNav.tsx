import { List, ListItemButton, ListItemText, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SideNav() {
  const navigate = useNavigate();

  const menu = [
    { label: "Home", path: "/dashboard/home" },
    { label: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <Box width="240px" bgcolor="#f5f5f5" height="100vh">
      <List>
        {menu.map((item) => (
          <ListItemButton key={item.path} onClick={() => navigate(item.path)}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
