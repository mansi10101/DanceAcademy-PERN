import { Modal, Box, Container, Button } from '@mui/material';
import React from 'react';
import styles from '../../Stylesheet/Text.module.css';

const BatchModal = ({ onClose, open }) => {
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
	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box component='form' noValidate sx={{ ...style, width: 400 }}>
				<h2 id='title' className={styles.formtitle}>
					Change batch from
				</h2>
				<Container component='main' maxWidth='xs'>
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
						fullWidth
						variant='contained'
					>
						Change batch
					</Button>
				</Container>
			</Box>
		</Modal>
	);
};

export default BatchModal;
