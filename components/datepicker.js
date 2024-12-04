"use client";
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const StyledDatePicker = styled(DatePicker)({
  '& .MuiInputBase-root': {
    fontSize: '14px', // Decrease the font size of the input
  },
  '& .MuiSvgIcon-root': {
    color: 'blue', // Change the icon color to blue
  },
});

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <StyledDatePicker
          label="Date picker"
          renderInput={(params) => <TextField {...params} />}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
