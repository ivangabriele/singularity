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
const MaterialTwentyMpRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
  d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M6.5,9c0-0.55,0.45-1,1-1h2V7H7.25 C6.84,7,6.5,6.66,6.5,6.25S6.84,5.5,7.25,5.5H10c0.55,0,1,0.45,1,1V8c0,0.55-0.45,1-1,1H8v1h2.25c0.41,0,0.75,0.34,0.75,0.75 s-0.34,0.75-0.75,0.75H7.5c-0.55,0-1-0.45-1-1V9z M12.5,17.75c0,0.41-0.34,0.75-0.75,0.75S11,18.16,11,17.75V14h-1v2.25 C10,16.66,9.66,17,9.25,17S8.5,16.66,8.5,16.25V14h-1v3.75c0,0.41-0.34,0.75-0.75,0.75S6,18.16,6,17.75V13.5c0-0.55,0.45-1,1-1 h4.5c0.55,0,1,0.45,1,1V17.75z M13,10.5v-4c0-0.55,0.45-1,1-1h2.5c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H14 C13.45,11.5,13,11.05,13,10.5z M18,16c0,0.55-0.45,1-1,1h-2v0.75c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75V13.5 c0-0.55,0.45-1,1-1H17c0.55,0,1,0.45,1,1V16z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1.5",
  width: "1.5",
  x: "15",
  y: "14"
}), /*#__PURE__*/React.createElement("rect", {
  height: "3",
  width: "1.5",
  x: "14.5",
  y: "7"
}))));
const MaterialTwentyMpRounded = (styled.default || styled)(MaterialTwentyMpRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialTwentyMpRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialTwentyMpRounded;