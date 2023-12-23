'use client';

import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/navigation';

const VisitApplySuccess = () => {

   const theme = useTheme();
   const router = useRouter();

   const handleClick = (e) => {
      (e).preventDefault();

      router.push('/visit');
   };

   return (
      <Box className='pageContainer' onClick={handleClick}>
         <Box sx={{  width: '100px', aspectRatio: '1/1', position: 'relative' }}>
            <Image src='/images/lgjl/visit/success.png' fill sizes='100%' alt='success' />
         </Box>
         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Box sx={{ fontSize: '1.5rem' }}>
               訪問申込書が提出されました。
            </Box>
            <Box sx={{ px: '5px', fontSize: '1.2rem' }}>
               訪問申し込み状況で申請結果を確認してください。
            </Box>
            <Box sx={{ width: '70%', mt: '30px', p: '20px', display: 'flex', flexDirection: 'column', gap: '20px', lineHeight: '150%',
               border: '1px solid var(--color-LGgray)', borderRadius: '10px',
               [theme.breakpoints.down('md')] : { width: '100%', mx: '5px' } }}>
               <Box>訪問当日、横浜ビル2階の受付で確認できる社員証や名刺を提出してください。</Box>
               <Box>スマートフォンのカメラ、ノートパソコンのポートを密封して入場してください。</Box>
               <Box>2日以上連続訪問の場合は、チェックアウトの際に2階の受付に出入証を返却し、翌日チェックインの際に再度お受け取りください。 出入国カードは取り出さないでください。</Box>
            </Box>
         </Box>


      </Box>
   );
};

export default VisitApplySuccess;