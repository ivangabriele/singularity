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
const MaterialViewComfyOutlinedSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 5v14h19V5H3zm17 4h-2.25V7H20v2zM9.25 11h2.25v2H9.25v-2zm-2 2H5v-2h2.25v2zm4.25-4H9.25V7h2.25v2zm2-2h2.25v2H13.5V7zm-2 8v2H9.25v-2h2.25zm2 0h2.25v2H13.5v-2zm0-2v-2h2.25v2H13.5zm4.25-2H20v2h-2.25v-2zM7.25 7v2H5V7h2.25zM5 15h2.25v2H5v-2zm12.75 2v-2H20v2h-2.25z"
}));
const MaterialViewComfyOutlined = (styled.default || styled)(MaterialViewComfyOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialViewComfyOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialViewComfyOutlined;