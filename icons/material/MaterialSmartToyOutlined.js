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
const MaterialSmartToyOutlinedSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,9V7c0-1.1-0.9-2-2-2h-3c0-1.66-1.34-3-3-3S9,3.34,9,5H6C4.9,5,4,5.9,4,7v2c-1.66,0-3,1.34-3,3s1.34,3,3,3v4 c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4c1.66,0,3-1.34,3-3S21.66,9,20,9z M18,19L6,19V7h12V19z M9,13c-0.83,0-1.5-0.67-1.5-1.5 S8.17,10,9,10s1.5,0.67,1.5,1.5S9.83,13,9,13z M16.5,11.5c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S14.17,10,15,10 S16.5,10.67,16.5,11.5z M8,15h8v2H8V15z"
}))));
const MaterialSmartToyOutlined = (styled.default || styled)(MaterialSmartToyOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialSmartToyOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialSmartToyOutlined;