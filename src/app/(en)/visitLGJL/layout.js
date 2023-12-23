'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

const VisitLayout = ({ children }) => {

   return (
      <RecoilRoot>
         { children }
      </RecoilRoot>
   );
};

export default VisitLayout;