"use client";
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box';

export default function CustomLabels() {
  return (
    <Box sx={{ backgroundColor: '#EEFAF7', borderRadius:2,boxShadow:1,padding:1 }}>
        <div className='flex justify-between items-center'>
        <p className='font-bold'>Revenue Summary</p>
        <p className='text-gray-500 text-sm'>See statistics for all time</p>
        </div>
        <p className='font-extrabold pt-3'>+3.15%</p>
      <BarChart
        series={[
          { data: [4, 2, 5, 4, 1], stack: 'A' },
          { data: [2, 8, 1, 3, 1], stack: 'A' },
          { data: [14, 6, 5, 8, 9] },
        ]}
        barLabel={(item, context) => {
          if ((item.value ?? 0) > 10) {
            return '';
          }
          return context.bar.height < 60 ? null : item.value?.toString();
        }}
        width={370}
        height={240}
      />
    </Box>
  );
}
