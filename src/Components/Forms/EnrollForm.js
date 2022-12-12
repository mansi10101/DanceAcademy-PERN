import React from 'react'
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from '../../Stylesheet/Text.module.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const EnrollForm = () => {

    const theme = createTheme(
      {
        palette: {
            primary: {
              main: '#ffffff',
            },
          },
    }
      );
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get("email"),
          password: data.get("password")
        });
      };
  return (
    <div className={styles.formcontainer} >
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: 'white',
            width:"auto", height:"auto"
          }}
        >
          <Typography component="h1" variant="h5" sx={{fontWeight:'bold', color:'white'}}> 
            Registration Form
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 2, mb: 2,color:'white',width:"auto", height:"auto"}}
          >
            <Grid container direction="row" spacing={2}>
                <Grid item xs>
                    <TextField
                    sx={{"& .MuiInputLabel-root": {color: 'white'},//styles the label
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "white" }}
                    }}
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="First Name"
                    name="name"
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                    sx={{"& .MuiInputLabel-root": {color: 'white'},//styles the label
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "white" }},
                      input: { color: 'white' }
                    }}
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Last Name"
                    name="name"
                    />
                </Grid>
            </Grid>
            <TextField
              sx={{"& .MuiInputLabel-root": {color: 'white'},
                   "& .MuiOutlinedInput-root": {
                   "& > fieldset": { borderColor: "white" }},
                    input: { color: 'white' }
              }}
              margin = "normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
            
            <TextField 
            sx={{"& .MuiInputLabel-root": {color: 'white'},//styles the label
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: "white" }}, 
              input: { color: 'white' }
            }}
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="Mobile Number"
              name="phone"
            />
            <Grid container direction="row" spacing={3}>
              <Grid item sx={{width:260}}>
                      <TextField
                        sx={{"& .MuiInputLabel-root": {color: 'white'},//styles the label
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": { borderColor: "white" }},
                          input: { color: 'white'},
                        }}
                        margin="normal"
                        required
                        fullWidth
                        id="age"
                        label="Age"
                        name="age"
                      />
                  </Grid>
                  <Grid item sx={{align:"right"}}>
                  <Box sx={{ minWidth: 130, marginTop:2}}>
                       <FormControl fullWidth 
                          sx={{"& .MuiInputLabel-root": {color: 'white'},//styles the label
                              "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderColor: "white" }},
                                input: { color: 'white'},
                              }}>
                          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            fullWidth
                            sx={{color:"white"}}
                            // value={age}
                            label="gender"
                            // onChange={handleChange}
                          >
                            <MenuItem value={67}> Female</MenuItem>
                            <MenuItem value={78}>Male</MenuItem>
                            <MenuItem value={89}>Others</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                  </Grid>
                </Grid>
                <Box sx={{ minWidth: 120, marginTop: 2}}>
                <FormControl fullWidth 
                          sx={{"& .MuiInputLabel-root": {color: 'white'},//styles the label
                              "& .MuiOutlinedInput-root": {
                                "& > fieldset": { borderColor: "white" }},
                                input: { color: 'white'},
                              }}>
                          <InputLabel id="demo-simple-select-label" required>Batch</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            fullWidth
                            
                            sx={{color:"white"}}
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                          >
                            <MenuItem value={67}>6 to 7am</MenuItem>
                            <MenuItem value={78}>7 to 8am</MenuItem>
                            <MenuItem value={89}>8 to 9am</MenuItem>
                            <MenuItem value={56}>5 to 6pm</MenuItem>
                          </Select>
                        </FormControl>
                        </Box>

                    <Grid container direction="row" spacing={2}>
                       <Grid item xs>
                          <h3 className={styles.text} >Fess:   500/-</h3>
                      </Grid>
                          <Grid item xs>
                          <Button  
                                sx={{ 
                                  fontSize: 20, 
                                  fontWeight:"bold",
                                  marginTop: 2,
                                  border: 2,
                                  ':hover': {
                                    bgcolor: 'info.main',
                                    color: 'white',
                                      }, 
                                  }} 
                                variant="outlined">Pay Now</Button>
                </Grid>
            </Grid>
                         
            <Button
            sx={{
                fontWeight:"bold",
                fontSize: 25,
                mt: 3, mb: 2,
                border: 2,
                bgcolor: 'info.main',
            }}
              type="submit"
              fullWidth
              variant="contained"
            >
              Submit
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>

    </div>
  )
}

export default EnrollForm




