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
const MaterialAnimationOutlinedSvg = /*#__PURE__*/React.createElement("svg", {
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
  x: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M15,2c-2.71,0-5.05,1.54-6.22,3.78c-1.28,0.67-2.34,1.72-3,3C3.54,9.95,2,12.29,2,15c0,3.87,3.13,7,7,7 c2.71,0,5.05-1.54,6.22-3.78c1.28-0.67,2.34-1.72,3-3C20.46,14.05,22,11.71,22,9C22,5.13,18.87,2,15,2z M9,20c-2.76,0-5-2.24-5-5 c0-1.12,0.37-2.16,1-3c0,3.87,3.13,7,7,7C11.16,19.63,10.12,20,9,20z M12,17c-2.76,0-5-2.24-5-5c0-1.12,0.37-2.16,1-3 c0,3.86,3.13,6.99,7,7C14.16,16.63,13.12,17,12,17z M16.7,13.7C16.17,13.89,15.6,14,15,14c-2.76,0-5-2.24-5-5 c0-0.6,0.11-1.17,0.3-1.7C10.83,7.11,11.4,7,12,7c2.76,0,5,2.24,5,5C17,12.6,16.89,13.17,16.7,13.7z M19,12c0-3.86-3.13-6.99-7-7 c0.84-0.63,1.87-1,3-1c2.76,0,5,2.24,5,5C20,10.12,19.63,11.16,19,12z"
}))));
const MaterialAnimationOutlined = (styled.default || styled)(MaterialAnimationOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialAnimationOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialAnimationOutlined;