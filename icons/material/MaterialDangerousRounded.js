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

const MaterialDangerousRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M14.9,3H9.1C8.57,3,8.06,3.21,7.68,3.59l-4.1,4.1C3.21,8.06,3,8.57,3,9.1v5.8c0,0.53,0.21,1.04,0.59,1.41l4.1,4.1 C8.06,20.79,8.57,21,9.1,21h5.8c0.53,0,1.04-0.21,1.41-0.59l4.1-4.1C20.79,15.94,21,15.43,21,14.9V9.1c0-0.53-0.21-1.04-0.59-1.41 l-4.1-4.1C15.94,3.21,15.43,3,14.9,3z M15.54,15.54L15.54,15.54c-0.39,0.39-1.02,0.39-1.41,0L12,13.41l-2.12,2.12 c-0.39,0.39-1.02,0.39-1.41,0l0,0c-0.39-0.39-0.39-1.02,0-1.41L10.59,12L8.46,9.88c-0.39-0.39-0.39-1.02,0-1.41l0,0 c0.39-0.39,1.02-0.39,1.41,0L12,10.59l2.12-2.12c0.39-0.39,1.02-0.39,1.41,0l0,0c0.39,0.39,0.39,1.02,0,1.41L13.41,12l2.12,2.12 C15.93,14.51,15.93,15.15,15.54,15.54z"
})));

const MaterialDangerousRounded = (styled.default || styled)(MaterialDangerousRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialDangerousRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialDangerousRounded;