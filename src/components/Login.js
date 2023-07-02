import React, {useEffect} from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    "&:hover": {
      opacity:0.8
    },
  },
}));

export default function Login() {
  const classes = useStyles();
  useEffect(() => {
    document.body.style.backgroundImage = 'linear-gradient(to right, orange, yellow)';
    return () => {
      document.body.style.backgroundImage = 'none';
    };
  }, []);

  const handleClick = () => {
    window.location = window.location.origin + "/user"
  }

  return (
    <CssVarsProvider>
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <div style={{ display: "flex" }}>
                <div 
                  style={{ 
                  backgroundColor: "orange",
                  padding: "2px",
                  marginRight: 10 
                  }}
                >
                </div>
                <b>
                  Manage Courses
                </b>
              </div>
            </Typography>
            <Typography
              level="h6"
              alignItems={'center'}
            >
              SIGN IN
            </Typography>
            <Typography
              level="body2"
              alignItems={'center'}
            >
              Enter your credentials to access your account
            </Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </FormControl>

          <Button sx={{ mt: 1, backgroundColor: "orange" }} className={classes.button} onClick={handleClick}>SIGN IN</Button>
          <Typography
            endDecorator={<Link color='warning'>Reset password</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Forgot your password?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
