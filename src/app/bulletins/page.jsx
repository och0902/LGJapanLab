'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, 
         TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import moment from 'moment/moment';

const Bulletins = () => {

   const session = useSession();

   const [ bulletins, setBulletins ] = useState([]);

   useEffect(() => {
      const url = '/api/bulletins';
      fetch(url, { method: 'GET', cache: 'no-store', })
         .then (response => response.json())
         .then (data => {
            const { bulletins } = data;
            setBulletins(bulletins);
         }) 
         .catch (error => { throw new Error(error); });
   },[ bulletins ]);

   const columns = [
      { id: 'no', label: 'No', minWidth: 10, align: 'center', },
      { id: 'author', label: 'Author', minWidth: 20, align: 'left', },
      { id: 'createdAt', label: 'Date', minWidth: 30, align: 'left', },
      { id: 'title', label: 'Title', minWidth: 340, align: 'left', },
   ];

   const [ page, setPage ] = React.useState(0);
	const [ rowsPerPage, setRowsPerPage ] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

   switch (session.status) {
      case 'loading':
         return (
            <Box sx={{ my: '10vh', display: 'flex', flexDirection: 'column', 
               justifyContent: 'center', alignItems: 'center' , gap: '15px', }} 
            > 
               LOADING ...
            </Box>
         );

      case 'unauthenticated':
         redirect('/bulletins/signIn');

      case 'authenticated': {
         return (
            <Box sx={{ my: '10vh', display: 'flex', flexDirection: 'column', gap: '15px', }} > 
               <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                  <TableContainer sx={{ maxHeight: '100%' }}>
                     <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                           <TableRow>
                              {columns.map((column, idx) => (
                                 <TableCell key={idx} align={column.align} style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                 </TableCell>
                              ))}
                           </TableRow>
                        </TableHead>
                        <TableBody>
                           {bulletins
                           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                           .map((bulletin, idx) => {
                              const url = `/bulletins/read/${bulletin._id}`;
                              return (
                                 <TableRow key={idx} hover role="checkbox" tabIndex={-1}>
                                    {columns.map((column, idx) => {
                                       let value = bulletin[column.id];    
                                       if( column.id === 'createdAt') {
                                          const date = moment(bulletin[column.id]);
                                          value = date.format('YYYY-MM-DD HH:mm:ss');
                                       } 
                                       return (
                                          <TableCell key={idx} align={column.align}><Link href={url}>{value}</Link></TableCell>
                                       );
                                    })}
                                 </TableRow>
                              );
                           })}
                        </TableBody>
                        <caption>
                           <Link href='/bulletins/create'>
                              <Button sx={{ ml: '20px', px: '10px', width: 'max-contnt', '&:hover': { color: 'var(--LG-simbolmark)', } }}>
                                 <Typography><CreateNewFolderOutlinedIcon sx={{ mb: '-5px' }} /> Create Bulletin</Typography>
                              </Button>
                           </Link>
                        </caption>
                     </Table>
                  </TableContainer>
                  <TablePagination
                     rowsPerPageOptions={[10, 25, 100]}
                     component="div"
                     count={bulletins.length}
                     rowsPerPage={rowsPerPage}
                     page={page}
                     onPageChange={handleChangePage}
                     onRowsPerPageChange={handleChangeRowsPerPage}
                  />
               </Paper>
            </Box>
         );
         break;
      };
   };

};

export default Bulletins;