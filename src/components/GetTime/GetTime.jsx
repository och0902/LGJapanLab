'use client';

import React, { useEffect, useState } from 'react';
import { Paper, Box, Typography } from '@mui/material';

const getDate = () => {

   const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   
   const date = new Date();

   const year = date.getFullYear( ); 
   const month = date.getMonth() < 9 ? '0'+(date.getMonth()+1) : date.getMonth()+1;
   const day = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
   const dayOfWeek = week[date.getDay()];
   const ampm = date.getHours() < 13 ? 'AM' : 'PM';
   const hours = date.getHours() < 13 ? 
      ( date.getHours() < 10 ? '0'+date.getHours() : date.getHours() ) 
      : 
      ( date.getHours() < 10 ?  '0'+(Number(date.getHours())-12) :  Number(date.getHours())-12 );
   const minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
   const seconds = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();

   return { year, month, day, dayOfWeek, ampm, hours, minutes, seconds };

};

const GetTime = () => {

   const [ time, setTime ] = useState( getDate() );

   useEffect(() => {

      const timer = setInterval(() => { 
         setTime( getDate() ); 
      }, 1000);

      return () => clearInterval(timer);

   }, []);

   return (
      <Paper sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
         <Box sx={{ display: 'flex',  flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography sx={{ mb: '10px', fontSize: '2rem', color: 'var(--color-LGgray)' }}>
               {time.year}.{time.month}.{time.day} {time.dayOfWeek}
            </Typography>
            <Typography sx={{ fontSize: '2rem', color: 'var(--color-LGgray)' }}>
               {time.ampm} {time.hours}:{time.minutes}:{time.seconds}
            </Typography>
         </Box>
      </Paper>
   ); 
};

export default GetTime;