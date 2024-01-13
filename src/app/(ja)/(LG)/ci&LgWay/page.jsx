'use client';

import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import Image from 'next/image';
import PageHero from '@/components/ja/PageHero/PageHero';

const LGWay = () => {

   const theme = useTheme();

   return (
      <Box className='pageContainer'>

         <Box sx={{ width: '100%', m: 'calc( var(--gap-basic)/2 ) auto', display: 'flex', flexDirection: 'column', 
            justifyContent: 'center', alignItems: 'center', gap: 'calc( var(--gap-basic)/3 )' }}>
            <Box sx={{ width: '340px', aspectRatio: '340/149', position: 'relative',
               [theme.breakpoints.down('lg')] : { width: '30%' },
               [theme.breakpoints.down('sm')] : { width: '45%' }}}>
               <Image src='/images/lg/ci&LgWay/LGCI.jpg' fill sizes='100%' sx={{ position: 'absolute' }} alt='LG CI' />
            </Box>
            <Box sx={{ width: '80%', margin: '0 auto', textAlign: 'center', [theme.breakpoints.down('md')]: { width: '100%', px: '5px' } }}>
               <Box sx={{ my: 'calc( var(--gap-basic) / 4  )', fontSize: '2.5rem', fontWeight: 'var(--weight-bold)' }}>Corporate Identity</Box>
               <Box>私たちは5つの概念と感情を視覚化した;</Box>
               <Box sx={{ my: 'calc( var(--gap-basic) / 4  )', fontSize: '1.5rem', fontWeight: 'var(--weight-bold)', color: 'var(--color-black)' }}>
                  世界、未来、若さ、人間、技術の象徴
               </Box>
               <Box sx={{ fontSize: '0.875rem', lineHeight: '150%' }}>
                  国民が企業経営の中心を成すことを意味する「L」と「G」の文字が円の中に挿入されています。 
                  ロゴは、世界中のお客様と緊密な関係を維持し、顧客満足のために努力するという同社の誓約を表しています。
               </Box>
            </Box>
         </Box>

         <Box sx={{ width: '100%', m: 'auto', display: 'flex', flexDirection: 'column', 
            justifyContent: 'center', alignItems: 'center', gap: 'calc( var(--gap-basic)/2 )' }}>
            <PageHero image='/images/lg/ci&LgWay/LGWay.jpg' aspectRatio='1920/400' title='LG Way'
               message1='LG WayはLG独自の経営哲学であり、'
               message2='LGの全従業員が守り、実践すべき思考と行動の基盤です。' />
            <Box sx={{ width: '80%', m: 'calc( var(--gap-basic) /2 )  auto', textAlign: 'center',
               [theme.breakpoints.down('md')]: { width: '100% ' } }}>
               <Box sx={{ lineHeight: '150%' }}>
                  LG Wayは経営理念である&apos;顧客のための価値創造&apos;と&apos;人間尊重の経営&apos;をLGの行動方式である「正道経営」で実践することで、LGのビジョンである「一等LG」を達成しようという事です。
               </Box>
            </Box>

            <Box sx={{ width: '100%', m: 'auto', backgroundColor: 'var(--color-LGgray-light)', color: 'black',
               [theme.breakpoints.down('md')] : { backgroundColor: 'white', color: 'var(--color-LGgray)' } }}>
               <Box sx={{ width: '80%', m: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', 
                  [theme.breakpoints.down('md')] : { width: '100%', flexDirection: 'column-reverse' } }}>
                  <Box sx={{ width: '60%', my: '30px', display: 'flex', flexDirection: 'column', 
                     [theme.breakpoints.down('md')]: {  width: '100%', px: '5px', alignItems: 'center', backgroundColor: 'white' } }}>
                     <Box sx={{ width: '100%', height: '118px', 
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', borderBottom: '1px solid var(--color-white)',
                        [theme.breakpoints.down('xl')]: { height: '106px' }, [theme.breakpoints.down('lg')]: { height: '95px' } }}>
                        <Box sx={{ fontSize: '2.5rem', fontWeight: 'var(--weight-bold)', [theme.breakpoints.down('lg')]: {  fontSize: '1.5rem' } }}>
                           ビジョン
                        </Box>
                        <Box sx={{ fontSize: '1rem', [theme.breakpoints.down('lg')]: { fontSize: '0.9rem' } }}>
                           LGの究極の指向点として市場で認められ、市場をリードする大手企業になること
                        </Box>
                     </Box>
                     <Box sx={{ width: '100%', height: '118px', 
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', borderBottom: '1px solid var(--color-white)',
                        [theme.breakpoints.down('xl')]: { height: '106px' }, [theme.breakpoints.down('lg')]: { height: '94px' } }}>
                        <Box sx={{ fontSize: '2.5rem', fontWeight: 'var(--weight-bold)', [theme.breakpoints.down('lg')]: { fontSize: '1.5rem', } }}>
                           行動方式
                        </Box>       
                        <Box sx={{ fontSize: '1rem', [theme.breakpoints.down('lg')]: { fontSize: '0.9rem' } }}>
                           倫理経営に基づいて着実に実力を培養して正当に勝負するLGだけの行動方式
                        </Box>
                     </Box>
                     <Box sx={{ width: '100%', height: '118px', 
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', 
                        [theme.breakpoints.down('xl')]: { height: '106px' }, [theme.breakpoints.down('lg')]: { height: '95px' } }}>
                        <Box sx={{ fontSize: '2.5rem', fontWeight: 'var(--weight-bold)', [theme.breakpoints.down('lg')]: { fontSize: '1.5rem', } }}>
                           経営理念
                        </Box>
                        <Box sx={{ fontSize: '1rem', [theme.breakpoints.down('lg')]: { fontSize: '0.9rem' } }}>
                           企業の存立根拠であり、会社運営の原則
                        </Box>
                     </Box>
                  </Box>

                  <Box sx={{ width: '500px', aspectRatio: '600/425', m: 'auto', position: 'relative',
                     [theme.breakpoints.down('xl')] : { width : '450px' },
                     [theme.breakpoints.down('lg')] : { width : '400px' },
                     [theme.breakpoints.down('sm')] : { width : '350px' }, }}>
                     <Image src='/images/lg/ci&LgWay/LGWayDiagramJa.png' fill sizes='100%' style={{ position: 'absolute' }} alt='LG Way' />
                  </Box>
               </Box>
            </Box>

         </Box>         
      </Box>
   );
};

export default LGWay;