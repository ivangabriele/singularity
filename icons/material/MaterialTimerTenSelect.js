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
const MaterialTimerTenSelectSvg = /*#__PURE__*/React.createElement("svg", {
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
  d: "M13,8v8h-3V8H13 M13,5h-3C8.34,5,7,6.34,7,8v8c0,1.66,1.34,3,3,3h3c1.66,0,3-1.34,3-3V8C16,6.34,14.66,5,13,5z M1,8h2v11h3 V5H1V8z M18.5,11c-0.83,0-1.5,0.68-1.5,1.5v2c0,0.82,0.67,1.5,1.5,1.5H21v1h-4v2h4.5c0.83,0,1.5-0.67,1.5-1.5v-2 c0-0.83-0.67-1.5-1.5-1.5H19v-1h4v-2H18.5z"
}));
const MaterialTimerTenSelect = (styled.default || styled)(MaterialTimerTenSelectSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialTimerTenSelect.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialTimerTenSelect;