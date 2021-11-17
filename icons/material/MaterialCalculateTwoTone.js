import PropTypes from 'prop-types';
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

const MaterialCalculateTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M5,19h14V5H5V19z M13.03,7.06L14.09,6l1.41,1.41L16.91,6l1.06,1.06l-1.41,1.41l1.41,1.41l-1.06,1.06 L15.5,9.54l-1.41,1.41l-1.06-1.06l1.41-1.41L13.03,7.06z M13,13.25h5v1.5h-5V13.25z M13,15.75h5v1.5h-5V15.75z M6.25,7.72h5v1.5 h-5V7.72z M6,14.5h2v-2h1.5v2h2V16h-2v2H8v-2H6V14.5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1.5",
  width: "5",
  x: "6.25",
  y: "7.72"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1.5",
  width: "5",
  x: "13",
  y: "15.75"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1.5",
  width: "5",
  x: "13",
  y: "13.25"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "8,18 9.5,18 9.5,16 11.5,16 11.5,14.5 9.5,14.5 9.5,12.5 8,12.5 8,14.5 6,14.5 6,16 8,16"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "14.09,10.95 15.5,9.54 16.91,10.95 17.97,9.89 16.56,8.47 17.97,7.06 16.91,6 15.5,7.41 14.09,6 13.03,7.06 14.44,8.47 13.03,9.89"
}))));

const MaterialCalculateTwoTone = (styled.default || styled)(MaterialCalculateTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialCalculateTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialCalculateTwoTone;