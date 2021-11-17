import PropTypes from 'prop-types';
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

const MaterialUpdateDisabledOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("path", {
  d: "M20.94,13c-0.15,1.38-0.62,2.67-1.33,3.79l-1.47-1.47c0.38-0.71,0.65-1.49,0.77-2.32H20.94z M8.67,5.84 C9.66,5.31,10.8,5,12,5c2.37,0,4.47,1.19,5.74,3H15v2h6V4h-2v2.36C17.35,4.32,14.83,3,12,3c-1.76,0-3.4,0.51-4.78,1.39L8.67,5.84z M11,7v1.17l2,2V7H11z M19.78,22.61l-3-3C15.39,20.48,13.76,21,12,21c-4.97,0-9-4.03-9-9c0-1.76,0.51-3.4,1.39-4.78L1.39,4.22 l1.41-1.41l18.38,18.38L19.78,22.61z M15.32,18.15L5.84,8.67C5.31,9.66,5,10.8,5,12c0,3.86,3.14,7,7,7 C13.2,19,14.34,18.69,15.32,18.15z"
}));

const MaterialUpdateDisabledOutlined = (styled.default || styled)(MaterialUpdateDisabledOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialUpdateDisabledOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialUpdateDisabledOutlined;