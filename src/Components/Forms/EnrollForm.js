import { Gender, Batch } from '../../utils/constants.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from '../../Stylesheet/Text.module.css';
import FormField from './FormField';
import { useState } from 'react';
import SelectField from './SelectField';
import FormTitle from './FormTitle.js';
import CompletePayment from './CompletePayment.js';
import TextField from '@mui/material/TextField';
import FlowButton from '../Buttons/FlowButton';
import {
  validateEmail,
  validatemobile,
  validateAge,
} from '../../utils/helper.js';

const EnrollForm = ({ addAbout }) => {
  const [gender, setGender] = useState();
  const [batch, setBatch] = useState();
  const [isSuccess, setIsSuccess] = useState(0);
  const [error, setError] = useState('');

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (
      data.get('firstname') === undefined ||
      data.get('firstname').length < 3
    ) {
      setError('Incorrect First Name !!');
    } else if (
      data.get('lastname') === undefined ||
      data.get('lastname').length < 3
    ) {
      setError('Incorrect Last Name !!');
    } else if (
      !validateEmail(data.get('email')) ||
      data.get('email') === undefined
    ) {
      setError('Invalid email address !!');
    } else if (
      data.get('phone') === undefined ||
      !validatemobile(data.get('phone'))
    ) {
      setError('Incorrect Mobile Number !!');
    } else if (data.get('age') === undefined || !validateAge(data.get('age'))) {
      setError('Invalid Age !!');
    } else if (gender === undefined) {
      setError('Please Select Gender !!');
    } else if (batch === undefined) {
      setError('Please Select Batch !!');
    } else {
      setError('');

      var first_name = data.get('firstname');
      var last_name = data.get('lastname');
      var email = data.get('email');
      var mobile = data.get('phone');
      var age = data.get('age');
      var fees = isSuccess ? 'true' : 'false';

      const body = {
        email,
        first_name,
        last_name,
        mobile,
        age,
        gender,
        batch,
        fees,
      };
      const response = await fetch('http://localhost:5000/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location = '/';
    }
  };

  return (
    <div className={styles.formcontainer}>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
              width: 'auto',
              height: 'auto',
            }}
          >
            <FormTitle title='Registration Form' addAbout={addAbout} />

            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ color: 'white' }}
            >
              <Grid container direction='row' spacing={2}>
                <Grid item xs>
                  <FormField label='First Name' name='firstname' id='name' />
                </Grid>
                <Grid item xs>
                  <FormField id='name' label='Last Name' name='lastname' />
                </Grid>
              </Grid>
              <FormField id='email' label='Email Address' name='email' />

              <FormField id='mobile' label='Mobile Number' name='phone' />
              <Grid container direction='row' spacing={3}>
                <Grid item sx={{ width: 260 }}>
                  <FormField id='age' label='Age' name='age' />
                </Grid>
                <Grid item sx={{ align: 'right' }}>
                  <Box sx={{ minWidth: 130, marginTop: 2 }}>
                    <SelectField
                      id='gender'
                      label='Gender'
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      options={Gender}
                      fullWidth
                      sx={{ color: 'white' }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ minWidth: 120, marginTop: 2 }}>
                <SelectField
                  fullWidth
                  label='Batch'
                  id='batch'
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                  options={Batch}
                  sx={{ color: 'white' }}
                />
              </Box>

              <Grid container direction='row' spacing={2}>
                <Grid item xs>
                  <TextField
                    sx={{
                      '& .MuiInputLabel-root': { color: 'white' },
                      fontSize: 30,
                    }}
                    disabled
                    margin='normal'
                    id='fees'
                    label='Fees : 500/-'
                    name='fees'
                  />
                </Grid>
                {isSuccess ? (
                  <Grid item xs>
                    <p style={{ marginTop: '30px', fontSize: '20px' }}>PAID</p>
                  </Grid>
                ) : (
                  <Grid item xs>
                    <CompletePayment
                      text='Pay now'
                      response={() => setIsSuccess(1)}
                    />
                  </Grid>
                )}
              </Grid>

              <p style={{ color: 'red' }}>{error}</p>

              <FlowButton buttontext='Submit' />
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default EnrollForm;
