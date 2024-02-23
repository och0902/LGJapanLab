import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';

const RequiredMark = (props) => {
   switch (props.language) {
      case 'Jpn' : return (<div className='mb-[-3px] py-[2px] px-[7px] text-[0.75rem] text-center text-white bg-LGred rounded-[12px]'>{props.title}</div>);
      case 'Eng' : return (<CircleIcon className='text-[0.6rem] text-LGred' />);
   }
};

export default RequiredMark;