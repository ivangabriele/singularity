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
const MaterialAlignVerticalCenterRoundedSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21,11h-4V7.5C17,6.67,16.33,6,15.5,6h0C14.67,6,14,6.67,14,7.5V11h-4V4.5C10,3.67,9.33,3,8.5,3h0C7.67,3,7,3.67,7,4.5V11 H2.84c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1H7v6.5C7,20.33,7.67,21,8.5,21h0c0.83,0,1.5-0.67,1.5-1.5V13h4v3.5 c0,0.83,0.67,1.5,1.5,1.5h0c0.83,0,1.5-0.67,1.5-1.5V13h4c0.55,0,1-0.45,1-1v0C22,11.45,21.55,11,21,11z"
}));
const MaterialAlignVerticalCenterRounded = (styled.default || styled)(MaterialAlignVerticalCenterRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialAlignVerticalCenterRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialAlignVerticalCenterRounded;