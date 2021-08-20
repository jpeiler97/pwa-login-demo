import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    backgroundColor: "#c2ede4",
  },
  submitButton: {
    margin: "15px",
  },
  loginTitle: {
    fontSize: "30px",
    fontFamily: "roboto",
  },
  innerPaper: {
    margin: "10px",
  },
});

function LoginForm({ Login, error }) {
  const classes = useStyles();
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <Box width="100%">
        <Paper className={classes.paper} elevation={3}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <h2 className={classes.loginTitle}>Login</h2>
            {error !== "" ? <div className="error">{error}</div> : ""}
            <Box width="80%">
              <Paper className={classes.innerPaper}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={5}
                >
                  <Grid container item xs={9}>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="standard"
                      onChange={(e) =>
                        setDetails({ ...details, name: e.target.value })
                      }
                      value={details.name}
                    ></TextField>
                  </Grid>
                  <Grid container item xs={9}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="standard"
                      type="email"
                      onChange={(e) =>
                        setDetails({ ...details, email: e.target.value })
                      }
                      value={details.email}
                    ></TextField>
                  </Grid>
                  <Grid container item xs={9}>
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      type="password"
                      variant="standard"
                      onChange={(e) =>
                        setDetails({ ...details, password: e.target.value })
                      }
                      value={details.password}
                    ></TextField>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
            <Button
              className={classes.submitButton}
              variant="contained"
              type="submit"
              value="LOGIN"
            >
              LOGIN
            </Button>
          </Grid>

          <Grid container direction="column" alignItems="center"></Grid>
        </Paper>
      </Box>
    </form>
  );
}

export default LoginForm;
