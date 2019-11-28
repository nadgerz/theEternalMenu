import React from 'react';

const xmlns = 'http://www.w3.org/2000/svg';
const xmlnsXlink = 'http://www.w3.org/1999/xlink';
const X = 30;
// const S = 24;

export const MenuIcon = () => {
  return (
    <svg
      viewBox={`0 0 ${X} ${X}`}
      width={'3rem'}
      height={'3rem'}
      xmlns={xmlns}
      xmlnsXlink={xmlnsXlink}
    >
      <title>svg_main_menu</title>
      {/*<g id="bg">*/}
      {/*  /!* the problem here lies with the 'none' attribute in fill *!/*/}
      {/*  <path id="Path_264" d="M0,0H30V30H0Z" style="'fill': 'none'"/>*/}
      {/*</g>*/}
      <g id="icon">
        <path
          id="Path_1993"
          fill={'currentColor'}
          d="M15,10.53A19.35,19.35,0,0,0,1.73,5.3V21.51A19.41,19.41,0,0,1,15,26.75a19.41,19.41,0,0,1,13.27-5.24V5.3A19.35,19.35,0,0,0,15,10.53Z"
        />
      </g>
    </svg>
  );
};
