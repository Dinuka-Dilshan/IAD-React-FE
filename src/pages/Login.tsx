import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState, useCallback, useEffect } from "react";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import useFetch from "../hooks/useFectch";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";

const Login = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [misMatch, setMisMatch] = useState(false);
  const { setUser } = useUser();

  const navigate = useNavigate();

  const { data, fetchData, isFetching, isError } = useFetch();

  const handleLogin = useCallback(() => {
    const fetch = async () => {
      await fetchData("/student/login", {
        type: "POST",
        body: {
          userName: userName,
          password: password,
        },
      });
      if (!data) {
        setMisMatch(true);
      }
    };

    fetch();
  }, [userName, password]);

  useEffect(() => {
    if (data) {
      setUser(data);
      navigate("/dashboard/mycourses");
    }
  }, [data]);

  const handleClickShowPassword = () => {
    setIsPasswordShow((p) => !p);
  };

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <Grid container justifyContent="center" alignItems="center" height={"92vh"}>
      <Grid
        item
        xs={12}
        lg={4}
        p="3rem"
        bgcolor="#F6F6F6"
        borderRadius="0.8rem"
      >
        <Typography color="custom.fontGray" fontSize="1.5rem">
          Login
        </Typography>
        {misMatch && (
          <Typography color={"red"}>Username or Password is Incorrect!</Typography>
        )}
        <Box mt="1rem">
          <TextField
            fullWidth
            label="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <FormControl sx={{ mt: "1rem" }} variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              id="outlined-adornment-password"
              type={isPasswordShow ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {isPasswordShow ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            fullWidth
            sx={{ mt: "4rem" }}
            variant="contained"
            onClick={handleLogin}
          >
            Login
          </Button>
          <Typography
            textAlign="center"
            fontSize="0.7rem"
            color="custom.fontGray"
            fontStyle="italic"
            mt="0.5rem"
            sx={{ cursor: "pointer" }}
          >
            Forgot password?
          </Typography>
        </Box>

        <hr
          style={{
            backgroundColor: "#296AE2",
            height: "0.05rem",
            border: "none",
            marginTop: "3rem",
          }}
        />
        <Typography
          textAlign="center"
          fontSize="0.7rem"
          color="custom.fontGray"
          mt="2rem"
          sx={{ cursor: "pointer", textDecoration: "underline" }}
        >
          Don’t have an account? Sign up
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
