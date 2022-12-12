import React from 'react'
import styles from '../../Stylesheet/Text.module.css'
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import EnrollButton from './EnrollButton';
import CheckProfileButton from './CheckProfileButton';


const Buttonlayout = () => {
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
                <EnrollButton/>
                <CheckProfileButton/>  
            </Stack>
            </ThemeProvider>
    </div>
  )
}

export default Buttonlayout