import React from 'react'
import styles from '../../Stylesheet/Text.module.css'
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CheckButton from './CheckButton';
import EnrollButton from './EnrollButton';



const Buttonlayout = ({ addEnForm, addChForm}) => {
  let theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
    },
  });


  return (
    <div className={styles.innerbuttonarea}>
      <ThemeProvider theme={theme}>
            <Stack direction="row" spacing={6}>
                <EnrollButton buttonname="Enroll Now" addEnForm={addEnForm} />
                <CheckButton buttonname="Already Enrolled ?" addChForm ={addChForm} />
            </Stack>
            </ThemeProvider>
    </div>
  )
}

export default Buttonlayout