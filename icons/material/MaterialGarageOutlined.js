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

const MaterialGarageOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,20H4V4h16V20z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "13",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "15",
  cy: "13",
  r: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.78,18.5h0.44C6.65,18.5,7,18.14,7,17.69V16.5h10v1.19c0,0.45,0.34,0.81,0.78,0.81h0.44c0.43,0,0.78-0.36,0.78-0.81 v-6.5c-0.82-2.46-1.34-4.03-1.56-4.69c-0.05-0.16-0.12-0.29-0.19-0.4c-0.02-0.02-0.03-0.04-0.05-0.07 c-0.38-0.52-0.92-0.53-0.92-0.53H7.72c0,0-0.54,0.01-0.92,0.54C6.78,6.06,6.77,6.08,6.75,6.1C6.68,6.21,6.61,6.34,6.56,6.5 C6.34,7.16,5.82,8.72,5,11.19v6.5C5,18.14,5.35,18.5,5.78,18.5z M8.33,7.5h7.34l0.23,0.69l0.43,1.31H7.67L8.33,7.5z M7,11.51V11.5 h10v0.01v2.99H7V11.51z"
}))));

const MaterialGarageOutlined = (styled.default || styled)(MaterialGarageOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialGarageOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialGarageOutlined;