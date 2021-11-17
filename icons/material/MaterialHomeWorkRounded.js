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
const MaterialHomeWorkRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,3h-8c-0.55,0-1,0.45-1,1v1.61c0,0,0,0,0.01,0.01l5,4.5C16.64,10.68,17,11.5,17,12.35V13h2v2h-2v2h2v2h-2v2h3 c0.55,0,1-0.45,1-1V4C21,3.45,20.55,3,20,3z M15,7h-2V5h2V7z M19,11h-2V9h2V11z M19,7h-2V5h2V7z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15,20v-7.65c0-0.28-0.12-0.55-0.33-0.74l-5-4.5C9.48,6.93,9.24,6.85,9,6.85c-0.24,0-0.48,0.09-0.67,0.26l-5,4.5 C3.12,11.79,3,12.06,3,12.35V20c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-4h4v4c0,0.55,0.45,1,1,1h2C14.55,21,15,20.55,15,20z"
}))));
const MaterialHomeWorkRounded = (styled.default || styled)(MaterialHomeWorkRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialHomeWorkRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialHomeWorkRounded;