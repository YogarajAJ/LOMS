import SideNav from "@/organisms/SideNav";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <Box display="flex" height="100vh">
      <SideNav />
      <Box flex={1} p={3} overflow="auto">
        <Outlet />
      </Box>
    </Box>
  );
}
