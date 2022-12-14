import React, { useState } from 'react';
import { Button } from '@mui/material';
import PaymentModal from './PaymentModal';

const CompletePayment = ({ text, response, disabled }) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				sx={{
					display:"flex",
					alignItems:"cenetr",
					justifyContent:"center",
					fontSize: 20,
					fontWeight: 'bold',
					marginTop: 2,
					border : 2,
					bgcolor: disabled ? '' : 'info.main',
					':hover': {
						bgcolor: '',
						color: 'white',
					},
				}}
				variant='outlined'
				disabled={disabled}
				onClick={handleOpen}
			>
				{disabled ? <p style={{color:"antiquewhite", fontSize:"22px",letterSpacing: "0.3rem"}}> {text} </p> :  text}
			</Button>
			<PaymentModal
				onClose={handleClose}
				open={open}
				response={response}
				disabled={disabled}
			/>
		</div>
	);
};

export default CompletePayment;
