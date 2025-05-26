import illustration from "@/assets/welcome-image.svg"; // the SVG or PNG you uploaded
import logo from "@/assets/logo.svg";
import Visibility from "@mui/icons-material/Visibility";
import { Box, Button, IconButton, Input, Link, Typography } from "@mui/joy";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      display="flex"
      height="100vh"
      width="100%"
      bgcolor="#f5fafa"
    >
      {/* Left Panel */}
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        px={4}
      >
        <img src={illustration} alt="Login illustration" style={{ maxWidth: "90%", height: "auto" }} />
        <Typography level="h3" mt={4} textAlign="center">
          Welcome to <br /> credit admin tool
        </Typography>
      </Box>

      {/* Right Panel */}
      <Box
        width={{ xs: "100%", md: "400px" }}
        bgcolor="#ffffff"
        p={5}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        boxShadow="sm"
      >
        <Box mb={3}>
          <img src={logo} alt="Kaleidofin Logo" width={140} />
        </Box>

        <Typography level="h4" fontWeight="lg">
          Login dashboard
        </Typography>
        <Typography level="body-sm" mb={3}>
          Enter your credentials
        </Typography>

        <Input
          placeholder="Email / Username"
          required
          type="email"
          variant="plain"
          sx={{ mb: 2 }}
        />

        <Input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          required
          variant="plain"
          endDecorator={
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              <Visibility />
            </IconButton>
          }
          sx={{ mb: 1 }}
        />

        <Link
          level="body-sm"
          href="#"
          color="primary"
          sx={{ mb: 3, alignSelf: "flex-end" }}
        >
          Forget Password?
        </Link>

        <Button variant="solid" color="primary" disabled>
          Login
        </Button>

        <Typography level="body-sm" mt={4} textAlign="center">
          Need help?{" "}
          <Link href="#" color="primary">
            Contact Us
          </Link>
        </Typography>

        <Typography level="body-xs" mt={3} textAlign="center" color="neutral">
          Powered by and partnered with{" "}
          <Link href="https://www.kaleidofin.com" target="_blank">
            Kaleidofin
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
