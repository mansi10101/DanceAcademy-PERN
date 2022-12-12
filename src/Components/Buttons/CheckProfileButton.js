import React from 'react'
import Button from '@mui/material/Button';

const CheckProfileButton = () => {
  return (
    <div>
        <Button 
            sx={{
              borderRadius: 3, 
              fontSize: 25, 
              fontWeight:"bold",
              border: 2,
              ':hover': {
                bgcolor: 'info.main',
                color: 'white',
                  }, 
              }} 
             variant="outlined">Already Enrolled ?</Button>
    </div>
  )
}

export default CheckProfileButton