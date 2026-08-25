
// import type { FC } from 'react';
// import React, { useState } from 'react';
// import React from 'react';
import  { type ReactNode } from 'react';

//interface CSRFHelperProps {
//   request: string ;
// }
// 1. Define the interface for the utilities object
interface CSRFHelper {
  add: (a: number, b: number) => number;

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





