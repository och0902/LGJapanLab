'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, 
         TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import moment from 'moment/moment';
import { toast } from 'react-hot-toast';

const Bulletins = () => {

   const [ bulletins, setBulletins ] = useState([]);

   const [ page, setPage ] = useState(0);
	const [ rowsPerPage, setRowsPerPage ] = useState(10);

   useEffect(() => {
      try{
         fetch('/api/bulletins', {
            method: 'GET', 
            cache: 'no-store', 
         }).then ((response) => {
            return response.json();
         }).then ((result) => {
            const { bulletins } = result;
            setBulletins(bulletins);
         });
      } catch { 
         (error) => toast.error(error.message);
      };
   },[ bulletins ]);

   const columns = [
      // { id: 'no', label: 'No', minWidth: 10, align: 'center', },
      { id: 'author', label: 'Author', minWidth: 20, align: 'center', },
      { id: 'createdAt', label: 'Date', minWidth: 30, align: 'center', },
      { id: 'title', label: 'Title', minWidth: 50, align: 'left', },
   ];

	const handleChangePage = (e, newPage) => {
      e.preventDefault();
      setPage(newPage);
	};

	const handleChangeRowsPerPage = (e) => {
      e.preventDefault();
		setRowsPerPage(+e.target.value);
		setPage(0);
	};

   return (
      <Box className='pageContainer'>
         <Paper sx={{ width: '100%', }}>
            <TableContainer sx={{ maxHeight: '100%', overflow: 'hidden'  }}>
               <Table stickyHeader size='small' aria-label="sticky table">
                  <TableHead sx={{ height: '50px' }}>
                     <TableRow>
                        {columns.map((column, i) => (
                           <TableCell key={i} align={column.align} style={{ minWidth: column.minWidth }}>
                              {column.label}
                           </TableCell>
                        ))}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {bulletins
                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                     .map((bulletin, i) => {
                        const url = `/bulletins/read/${bulletin._id}`;
                        return (
                           <TableRow key={i} hover role="checkbox" tabIndex={-1} >
                              {columns.map((column, j) => {
                                 let value = bulletin[column.id];    
                                 if( column.id === 'createdAt') {
                                    const date = moment(bulletin[column.id]);
                                    value = date.format('YYYY-MM-DD HH:mm:ss');
                                 } 
                                 return (
                                    <TableCell key={j} align={column.align} sx={{ '&:hover': { color: 'var(--color-LGred)' } }}>
                                       <Link href={url}>{value}</Link>
                                    </TableCell>
                                 );
                              })}
                           </TableRow>
                        );
                     })}
                  </TableBody>
                  <caption>
                     <Link href='/bulletins/create'>
                        <Button sx={{ ml: '20px', px: '10px', width: 'max-contnt', '&:hover': { color: 'var(--color-LGred)', } }}>
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
};

export default Bulletins;