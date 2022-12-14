import Button from '@mui/material/Button';
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

const EnrollForm = ({ addAbout }) => {
	const [gender, setGender] = useState();
	const [batch, setBatch] = useState();
	const [isSuccess, setIsSuccess] = useState(0);
	const [error, setError] = useState('');

	function ValidateEmail(input) {
		var validRegex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (input.match(validRegex)) {
			return true;
		} else {
			return false;
		}
	}

	const theme = createTheme({
		palette: {
			primary: {
				main: '#ffffff',
			},
		},
	});

	const handleSubmit = (event) => {
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
			!ValidateEmail(data.get('email')) ||
			data.get('email') === undefined
		) {
			setError('Invalid email address !!');
		} else if (
			data.get('phone') === undefined ||
			!/^[1-9]{1}[0-9]{9}$/.test(data.get('phone'))
		) {
			setError('Incorrect Mobile Number !!');
		} else if (
			data.get('age') === undefined ||
			!(parseInt(data.get('age')) >= 18 && parseInt(data.get('age')) <= 65)
		) {
			setError('Invalid Age !!');
		} else if (gender === undefined) {
			setError('Please Select Gender !!');
		} else if (batch === undefined) {
			setError('Please Select Batch !!');
		} else {
			setError('');
			console.log({
				firstname: data.get('firstname'),
				lastname: data.get('lastname'),
				email: data.get('email'),
				phone: data.get('phone'),
				age: data.get('age'),
				gender: gender,
				batch: batch,
			});
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
									<p style={{fontSize:"25px",color:"white"}}>Fess: 500/-</p>
								</Grid>
								<Grid item xs>
									<CompletePayment
										text={isSuccess ? 'Paid :)' : 'Pay now'}
										disabled={isSuccess}
										response={() => setIsSuccess(1)}
									/>
								</Grid>
							</Grid>

							<p style={{ color: 'red' }}>{error}</p>

							<Button
								sx={{
									fontWeight: 'bold',
									fontSize: 25,
									mt: 3,
									mb: 2,
									border: 2,
									bgcolor: 'info.main',
									':hover': {
										bgcolor: '',
										color: 'black',
										fontWeight: 20,
									},
								}}
								type='submit'
								fullWidth
								variant='contained'
							>
								Submit
							</Button>
						</Box>
					</Box>
				</Container>
			</ThemeProvider>
		</div>
	);
};

export default EnrollForm;
