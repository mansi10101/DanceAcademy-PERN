import React from 'react'
import Button from '@mui/material/Button';

const EnrollButton = () => {
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
        variant="outlined" color='primary'>Enroll Now</Button>

    </div>
  )
}

export default EnrollButton