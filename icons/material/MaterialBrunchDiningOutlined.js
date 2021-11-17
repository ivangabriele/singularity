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

const MaterialBrunchDiningOutlinedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M2,21.5C2,21.78,2.22,22,2.49,22h13.02c0.27,0,0.49-0.22,0.49-0.5V20H2V21.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.5,16H11v-2H7v2H2.5C2.22,16,2,16.22,2,16.5V18h14v-1.5C16,16.22,15.78,16,15.5,16z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M20.47,15.45c0.99-1.07,1.53-2.48,1.53-3.94V2h-6v9.47c0,1.48,0.58,2.92,1.6,4l0.4,0.42V22h4v-2h-2v-4.03L20.47,15.45z M18,4h2v4h-2V4z M19.03,14.07c-0.65-0.71-1.03-1.65-1.03-2.6V10h2v1.51C20,12.46,19.66,13.36,19.03,14.07z"
}))));

const MaterialBrunchDiningOutlined = (styled.default || styled)(MaterialBrunchDiningOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialBrunchDiningOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialBrunchDiningOutlined;