import React from 'react';
import styled from 'styled-components';
const ACCENT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  INFO: 'info'
};
const ACCENTS = Object.values(ACCENT);
const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};
const SIZES = Object.values(SIZE);

const MaterialHdrPlusTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M12,4c-4.41,0-8,3.59-8,8c0,2.52,1.17,4.77,3,6.24V13h3.5c0.8,0,1.5,0.7,1.5,1.5v1c0,0.6-0.4,1.1-0.9,1.4 L12,19h-1.5l-0.9-2H8.5v2H8.13c1.15,0.64,2.47,1,3.87,1c4.41,0,8-3.59,8-8C20,7.59,16.41,4,12,4z M12,12h-1.5V9.5h-2V12H7V6h1.5v2 h2V6H12V12z M17.5,16H16v1.5h-1.5V16H13v-1.5h1.5V13H16v1.49h1.5V16z M17.5,10.5c0,0.8-0.7,1.5-1.5,1.5h-3V6h3 c0.8,0,1.5,0.7,1.5,1.5V10.5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("rect", {
  height: "3",
  opacity: ".3",
  width: "1.5",
  x: "14.5",
  y: "7.5"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1",
  opacity: ".3",
  width: "2",
  x: "8.5",
  y: "14.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-1.4,0-2.72-0.36-3.87-1H8.5v-2h1.1l0.9,2H12 l-0.9-2.1c0.5-0.3,0.9-0.8,0.9-1.4v-1c0-0.8-0.7-1.5-1.5-1.5H7v5.24C5.17,16.77,4,14.52,4,12c0-4.41,3.59-8,8-8s8,3.59,8,8 C20,16.41,16.41,20,12,20z M8.5,15.5v-1h2v1H8.5z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "10.5,8 8.5,8 8.5,6 7,6 7,12 8.5,12 8.5,9.5 10.5,9.5 10.5,12 12,12 12,6 10.5,6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16,6h-3v6h3c0.8,0,1.5-0.7,1.5-1.5v-3C17.5,6.7,16.8,6,16,6z M16,10.5h-1.5v-3H16V10.5z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "16,13 14.5,13 14.5,14.5 13,14.5 13,16 14.5,16 14.5,17.5 16,17.5 16,16 17.5,16 17.5,14.49 16,14.49"
}))));

const MaterialHdrPlusTwoTone = (styled.default || styled)(MaterialHdrPlusTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialHdrPlusTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialHdrPlusTwoTone;