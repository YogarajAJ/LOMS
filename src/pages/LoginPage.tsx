import illustration from "@/assets/welcome-image.svg";
import logo from "@/assets/logo.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { 
  Box, 
  Button, 
  IconButton, 
  Link, 
  Typography, 
  TextField,
  InputAdornment
} from "@mui/material";
import { useState } from "react";

interface FormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

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
        alignItems="flex-start"
        justifyContent="center"
        flexDirection="column"
        px={8}
      >
        <img src={illustration} alt="Login illustration" />
        <Typography variant="h3" mt={4} fontWeight={700}>
          Welcome to <br /> credit admin tool
        </Typography>
      </Box>

      {/* Right Panel */}
      <Box
        width={{ xs: "100%", md: "35%" }}
        bgcolor="#ffffff"
        p={5}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <img src={logo} alt="Kaleidofin Logo" width={'50%'} />
          <Typography variant="h4" component="h1" fontWeight="bold" color="text.primary" mb={1}>
            Login dashboard
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Enter your credentials
          </Typography>
        </Box>

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>
          {/* Email/Username Field */}
          <TextField
            name="email"
            label="Email / Username"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            variant="standard"
            fullWidth
            required
            sx={{
              mb: 3,
              '& .MuiInput-underline:before': {
                borderBottomColor: '#e0e0e0',
                borderBottomWidth: 2
              },
              '& .MuiInput-underline:hover:before': {
                borderBottomColor: '#26a69a',
                borderBottomWidth: 2
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#26a69a',
                borderBottomWidth: 2
              },
              '& .MuiInputLabel-root': {
                color: '#666',
                fontSize: '1rem',
                fontWeight: 500
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#26a69a'
              },
              '& .MuiInputBase-input': {
                fontSize: '1rem',
                py: 1
              }
            }}
          />

          {/* Password Field */}
          <TextField
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleInputChange}
            variant="standard"
            fullWidth
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{ color: '#26a69a' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 2,
              '& .MuiInput-underline:before': {
                borderBottomColor: '#e0e0e0',
                borderBottomWidth: 2
              },
              '& .MuiInput-underline:hover:before': {
                borderBottomColor: '#26a69a',
                borderBottomWidth: 2
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#26a69a',
                borderBottomWidth: 2
              },
              '& .MuiInputLabel-root': {
                color: '#666',
                fontSize: '1rem',
                fontWeight: 500
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#26a69a'
              },
              '& .MuiInputBase-input': {
                fontSize: '1rem',
                py: 1
              }
            }}
          />

          {/* Forgot Password Link */}
          <Box sx={{ textAlign: 'right', mb: 3 }}>
            <Link
              href="#"
              underline="none"
              sx={{
                color: '#26a69a',
                fontSize: '0.875rem',
                '&:hover': {
                  color: '#00695c',
                  textDecoration: 'underline'
                }
              }}
            >
              Forget Password?
            </Link>
          </Box>

          {/* Login Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            disabled={!formData.email || !formData.password}
            sx={{
              py: 1.5,
              fontWeight: 500,
              textTransform: 'none',
              fontSize: '1rem',
              borderRadius: 1,
              mb: 4,
              '&:disabled': {
                backgroundColor: '#e0e0e0',
                color: '#9e9e9e'
              }
            }}
          >
            Login
          </Button>
        </Box>

        {/* Help Section */}
        <Typography variant="body2" textAlign="center" color="text.secondary" mb={3}>
          Need help?{" "}
          <Link 
            href="#" 
            underline="none"
            sx={{
              color: '#26a69a',
              '&:hover': {
                color: '#00695c',
                textDecoration: 'underline'
              }
            }}
          >
            Contact Us
          </Link>
        </Typography>

        {/* Footer */}
        <Typography variant="caption" textAlign="center" color="text.secondary">
          Powered by and partnered with{" "}
          <Link 
            href="https://www.kaleidofin.com" 
            target="_blank"
            underline="none"
            sx={{
              color: '#26a69a',
              '&:hover': {
                color: '#00695c',
                textDecoration: 'underline'
              }
            }}
          >
            Kaleidofin
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;