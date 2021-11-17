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
const MaterialLuggageRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M17,6h-2V3c0-0.55-0.45-1-1-1h-4C9.45,2,9,2.45,9,3v3H7C5.9,6,5,6.9,5,8v11c0,1.1,0.9,2,2,2c0,0.55,0.45,1,1,1 c0.55,0,1-0.45,1-1h6c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1c1.1,0,2-0.9,2-2V8C19,6.9,18.1,6,17,6z M8.75,18L8.75,18 C8.34,18,8,17.66,8,17.25v-7.5C8,9.34,8.34,9,8.75,9h0C9.16,9,9.5,9.34,9.5,9.75v7.5C9.5,17.66,9.16,18,8.75,18z M12,18L12,18 c-0.41,0-0.75-0.34-0.75-0.75v-7.5C11.25,9.34,11.59,9,12,9h0c0.41,0,0.75,0.34,0.75,0.75v7.5C12.75,17.66,12.41,18,12,18z M13.5,6 h-3V3.5h3V6z M15.25,18L15.25,18c-0.41,0-0.75-0.34-0.75-0.75v-7.5C14.5,9.34,14.84,9,15.25,9h0C15.66,9,16,9.34,16,9.75v7.5 C16,17.66,15.66,18,15.25,18z"
})));
const MaterialLuggageRounded = (styled.default || styled)(MaterialLuggageRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialLuggageRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialLuggageRounded;