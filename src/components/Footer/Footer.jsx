import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
   return (
      <Box sx={{ margin: 'auto', mt: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
         <Typography variant='body2'>Copyright ⓒ 2024 LG Japan Lab Inc. All Rights Reserved.</Typography>
      </Box>
   );
};

export default Footer;