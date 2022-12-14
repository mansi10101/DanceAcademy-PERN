import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from '../../Stylesheet/Text.module.css';
import FormField from './FormField';
import { useState } from 'react';
import FormTitle from './FormTitle.js';
import { Modal } from '@mui/material';
import PaymentModal from './PaymentModal';
import BatchModal from './BatchModal';

const CheckForm = ({ addAbout }) => {
	const [error, setError] = useState('');
	const [section, setSection] = useState(1);
	const [batchModal, setBatchModal] = useState(0);
	const [payModal, setPayModal] = useState(0);
	const [paySuccess, setPaySuccess] = useState(0);

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
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 700,
		bgcolor: 'black',
		border: '2px solid #000',
		boxShadow: 24,
		pt: 2,
		px: 4,
		pb: 3,
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		if (!ValidateEmail(data.get('email')) || data.get('email') === undefined) {
			setError('Invalid email address !!');
		} else {
			setError('');
			console.log({
				email: data.get('email'),
			});
			setSection(2);
		}
	};
	return (
		<div className={styles.formcontainer}>
			<ThemeProvider theme={theme}>
				<Container component='main' maxWidth='xs'>
					{section === 1 ? (
						<Box
							onSubmit={handleSubmit}
							component='form'
							noValidate
							sx={{ color: 'white' }}
						>
							<FormTitle title='Enrolled Student Form' addAbout={addAbout} />

							<FormField id='email' label='Email Address' name='email' />

							{error}

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
					) : (
						<Box
							noValidate
							sx={{
								color: 'white',
								display: 'flex',
								flexDirection: 'column',
								rowGap: '1rem',
							}}
						>
							<FormTitle
								title='Enrolled Student Info'
								addAbout={() => setSection(1)}
							/>
							<div className={styles.contentTile}>
								Full Name : Jayraj Rathod
							</div>
							<div className={styles.contentTile}>
								Email : jayrahod5@gmail.com
							</div>
							<div className={styles.contentTile}>Mob. No. : 9427499693</div>

							<div className={styles.contentFlexRow}>
								<div className={styles.contentTile}>Age : 21</div>
								<div className={styles.contentTile}>Gender : Male</div>
							</div>
							<div className={styles.contentFlexRow}>
								<div className={styles.contentTile}>Batch : 6-7</div>
								<Button
									sx={{
										fontWeight: 'bold',
										fontSize: '1rem',
										border: 2,
										bgcolor: 'info.main',
										':hover': {
											bgcolor: '',
											color: 'black',
											fontWeight: 20,
										},
									}}
									type='submit'
									variant='contained'
									onClick={() => setBatchModal(1)}
								>
									Change batch
								</Button>
							</div>
							<div className={styles.contentFlexRow}>
								<div className={styles.contentTile}>Fees : Paid</div>
								<Button
									sx={{
										fontWeight: 'bold',
										fontSize: '1rem',
										border: 2,
										bgcolor: 'info.main',
										':hover': {
											bgcolor: '',
											color: 'black',
											fontWeight: 20,
										},
									}}
									type='submit'
									variant='contained'
									disabled={paySuccess}
									onClick={() => setPayModal(1)}
								>
									{paySuccess ? 'Paid' : 'Pay'}
								</Button>
							</div>
							<PaymentModal
								onClose={() => setPayModal(0)}
								open={payModal}
								response={() => setPaySuccess(1)}
								disabled={paySuccess}
							/>
							<PaymentModal />
							<BatchModal onClose={() => setBatchModal(0)} open={batchModal} />
						</Box>
					)}
				</Container>
			</ThemeProvider>
		</div>
	);
};

export default CheckForm;
