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
const MaterialHdrEnhancedSelectOutlinedSvg = /*#__PURE__*/React.createElement("svg", {
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
  d: "M12,2c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6S8.69,2,12,2z M12,4C9.79,4,8,5.79,8,8s1.79,4,4,4s4-1.79,4-4 S14.21,4,12,4z M13,11h-2V9H9V7h2V5h2v2h2v2h-2V11z M24,20h-2v2h-1.5v-2h-2v-1.5h2v-2H22v2h2V20z M18,18.5c0,0.6-0.4,1.1-0.9,1.4 L18,22h-1.5l-0.9-2h-1.1v2H13v-6h3.5c0.8,0,1.5,0.7,1.5,1.5V18.5z M16.5,18.5v-1h-2v1H16.5z M3.5,18v-2H5v6H3.5v-2.5h-2V22H0v-6 h1.5v2H3.5z M10,16c0.8,0,1.5,0.7,1.5,1.5v3c0,0.8-0.7,1.5-1.5,1.5H6.5v-6H10z M10,20.5v-3H8v3H10z"
}))));
const MaterialHdrEnhancedSelectOutlined = (styled.default || styled)(MaterialHdrEnhancedSelectOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialHdrEnhancedSelectOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialHdrEnhancedSelectOutlined;