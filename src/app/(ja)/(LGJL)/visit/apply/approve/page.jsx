'use client';

import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/navigation';
import CircleIcon from '@mui/icons-material/Circle';

const VisitApplyApprove = () => {

   const theme = useTheme();
   const router = useRouter();

   const handleClick = (e) => {
      (e).preventDefault();

      router.push('/visit');
   };

   return (
      <Box className='pageContainer' onClick={handleClick} sx={{ height: '60dvh' }} >
         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Box sx={{  width: '100px', aspectRatio: '1/1', position: 'relative' }}>
               <Image src='/images/lgjl/visit/success.png' fill sizes='100%' alt='success' />
            </Box>
            <Box sx={{ fontSize: '1.5rem', mt: '40px' }}>訪問申請が承認されました。</Box>
            <Box sx={{ mt: '30px', p: '20px', display: 'flex', flexDirection: 'column', gap: '10px', lineHeight: '150%',
               border: '1px solid var(--color-LGgray)', borderRadius: '10px',
               [theme.breakpoints.down('md')] : { width: '100%', mx: '5px' } }}>
               <Box><CircleIcon sx={{ fontSize: '0.6rem' }} /> 訪問当日、横浜ビル2階の案内デスクにお名前の確認ができる社員証または名刺をご提示ください。</Box>
               <Box><CircleIcon sx={{ fontSize: '0.6rem' }} /> スマートフォンのカメラ、Notebookの外部接続ポートを封印した後、出入証をお受け取りください。</Box>
               <Box><CircleIcon sx={{ fontSize: '0.6rem' }} /> 事前に搬入物として申し込みされていないデジタル記録メディア(Notebook, USB, HDD等)は社内搬入禁止です。</Box>
               <Box><CircleIcon sx={{ fontSize: '0.6rem' }} /> 2日以上訪問する場合、出入証は退室時に毎日2階の案内デスクに返却し、翌日入室時に再度受領してください。</Box>
               <Box>【 W-Fi接続情報 】 - SSID : JL_Guest, Password : lgjl.gwls8500</Box>
               <Box>【 会議室情報 】-場所 : XF Meeting Room X, 日時 : YYYY年MM月DD日 HH:MM ~ HH:MM</Box>
            </Box>
         </Box>
      </Box>
   );
};

export default VisitApplyApprove;