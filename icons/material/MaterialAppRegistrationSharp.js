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
const MaterialAppRegistrationSharpSvg = /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "4",
  x: "10",
  y: "4"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "4",
  x: "4",
  y: "16"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "4",
  x: "4",
  y: "10"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "4",
  x: "4",
  y: "4"
}), /*#__PURE__*/React.createElement("rect", {
  height: "4",
  width: "4",
  x: "16",
  y: "4"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "11,17.86 11,20 13.1,20 19.08,14.03 16.96,11.91"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "14,12.03 14,10 10,10 10,14 12.03,14"
}), /*#__PURE__*/React.createElement("rect", {
  height: "3",
  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -2.481 17.1312)",
  width: "2",
  x: "18.44",
  y: "10.06"
}))));
const MaterialAppRegistrationSharp = (styled.default || styled)(MaterialAppRegistrationSharpSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialAppRegistrationSharp.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialAppRegistrationSharp;