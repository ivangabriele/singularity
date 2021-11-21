import React from 'react';
import styled from 'styled-components';

const MaterialTwelveMpTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M5,19h14V5H5V19z M18,13.5V16c0,0.55-0.45,1-1,1h-2v1.5h-1.5v-6H17C17.55,12.5,18,12.95,18,13.5z M12,9 c0-0.55,0.45-1,1-1h2V7h-3V5.5h3.5c0.55,0,1,0.45,1,1V8c0,0.55-0.45,1-1,1h-2v1h3v1.5H12V9z M7,5.5h3v6H8.5V7H7V5.5z M6,13.5 c0-0.55,0.45-1,1-1h4.5c0.55,0,1,0.45,1,1v5H11V14h-1v3H8.5v-3h-1v4.5H6V13.5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1.5",
  opacity: ".3",
  width: "1.5",
  x: "15",
  y: "14"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5,14h1v3H10v-3h1v4.5h1.5v-5c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v5h1.5V14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.5,18.5H15V17h2c0.55,0,1-0.45,1-1v-2.5c0-0.55-0.45-1-1-1h-3.5V18.5z M15,14h1.5v1.5H15V14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "8.5,11.5 10,11.5 10,5.5 7,5.5 7,7 8.5,7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.5,10h-3V9h2c0.55,0,1-0.45,1-1V6.5c0-0.55-0.45-1-1-1H12V7h3v1h-2c-0.55,0-1,0.45-1,1v2.5h4.5V10z"
}))));

const MaterialTwelveMpTwoTone = (styled.default || styled)(MaterialTwelveMpTwoToneSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialTwelveMpTwoTone;