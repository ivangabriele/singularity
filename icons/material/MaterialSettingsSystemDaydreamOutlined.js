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

const MaterialSettingsSystemDaydreamOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.5 17H9c-2.21 0-4-1.79-4-4 0-1.93 1.36-3.56 3.22-3.92C9.04 7.8 10.47 7 12 7c1.95 0 3.66 1.28 4.26 3.09 1.58.36 2.74 1.75 2.74 3.41 0 1.93-1.57 3.5-3.5 3.5zm-6.76-5.98C7.74 11.15 7 11.99 7 13c0 1.1.9 2 2 2h6.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-.87l-.17-.86C14.29 9.92 13.23 9 12 9c-.96 0-1.84.57-2.26 1.45l-.27.57h-.73zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"
}));

const MaterialSettingsSystemDaydreamOutlined = (styled.default || styled)(MaterialSettingsSystemDaydreamOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialSettingsSystemDaydreamOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialSettingsSystemDaydreamOutlined;