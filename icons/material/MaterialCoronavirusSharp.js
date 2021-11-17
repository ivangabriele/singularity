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
const MaterialCoronavirusSharpSvg = /*#__PURE__*/React.createElement("svg", {
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
  d: "M20.5,10.5v0.75h-1.54c-0.15-1.37-0.69-2.63-1.52-3.65l1.09-1.09l0.01,0.01l0.53,0.53l1.06-1.06l-2.12-2.12l-1.06,1.06 l0.52,0.52l-1.09,1.09c-1.02-0.82-2.27-1.36-3.64-1.51V3.5h0.01h0.75V2h-3v1.5h0.74v1.54C9.87,5.19,8.62,5.74,7.6,6.56L6.51,5.47 l0.01-0.01l0.53-0.53L5.99,3.87L3.87,5.99l1.06,1.06l0.52-0.52l1.09,1.09c-0.82,1.02-1.36,2.26-1.5,3.63H3.5V10.5H2v3h1.5v-0.75 h1.54c0.15,1.37,0.69,2.61,1.5,3.63l-1.09,1.09l-0.52-0.52l-1.06,1.06l2.12,2.12l1.06-1.06l-0.53-0.53v0l-0.01-0.01l1.09-1.09 c1.02,0.82,2.26,1.36,3.63,1.51v1.54H10.5V22h3v-1.5h-0.75h-0.01v-1.54c1.37-0.14,2.62-0.69,3.64-1.51l1.09,1.09l-0.52,0.52 l1.06,1.06l2.12-2.12l-1.06-1.06l-0.53,0.53c0,0,0,0,0,0l-0.01,0.01l-1.09-1.09c0.82-1.02,1.37-2.27,1.52-3.65h1.54v0.75H22v-3H20.5 z M13.75,8c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S13.2,8,13.75,8z M10.25,8c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1 S9.7,8,10.25,8z M8.5,13c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C9.5,12.55,9.05,13,8.5,13z M10.25,16c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1s1,0.45,1,1C11.25,15.55,10.8,16,10.25,16z M12,13c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1 C13,12.55,12.55,13,12,13z M13.75,16c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C14.75,15.55,14.3,16,13.75,16z M15.5,13 c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C16.5,12.55,16.05,13,15.5,13z"
}));
const MaterialCoronavirusSharp = (styled.default || styled)(MaterialCoronavirusSharpSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialCoronavirusSharp.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialCoronavirusSharp;