
// import type { FC } from 'react';
// import React, { useState } from 'react';
// import React from 'react';
import  type { ReactNode } from 'react';

// Play with a  method in a interface, request too...
interface CSRFHelper {
  add: (a: number, b: number) => number;
  //request: Request ;
}

interface CSRFHelperProps {
  children: (utils: CSRFHelper) => ReactNode;
}

// The Non-UI Component
//export default function CSRFHelper({ children }) {

export function CSRFHelper({ children }: CSRFHelperProps) {
  const csrfUtils: CSRFHelper = {
    add: (a, b) => a + b,
  };

  return children(csrfUtils);
}





