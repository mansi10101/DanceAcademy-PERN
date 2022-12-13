import React from 'react'
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { FormControl, MenuItem } from '@mui/material';

const SelectField = ({
  id,
  label,
  options,
  value,
  onChange
}) => {

  return (
    <div>
         <FormControl fullWidth 
              sx={{"& .MuiInputLabel-root": {color: 'white'},
                  "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: "white" }},
                    input: { color: 'white'},
                  }}>
              <InputLabel>{label}</InputLabel>
              <Select
                labelId="select"
                id={id}
                fullWidth
                sx={{color:"white"}}
                value={value}
                label={label}
                onChange={onChange}
              >
                {options.map((opt) => {return <MenuItem key={opt.id} value={opt.value}> {opt.label}</MenuItem>}
                )}
              </Select>
            </FormControl>
    </div>

  )
}

export default SelectField