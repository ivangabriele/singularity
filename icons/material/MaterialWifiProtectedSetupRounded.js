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

const MaterialWifiProtectedSetupRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M16.7,5.3l1.44-1.44c0.32-0.32,0.09-0.85-0.35-0.85H11.5c-0.28,0-0.5,0.22-0.5,0.5V9.8c0,0.45,0.54,0.67,0.85,0.35 l1.45-1.45c1.97,1.46,3.25,3.78,3.25,6.42c0,0.66-0.08,1.31-0.24,1.92c-0.12,0.5,0.48,0.86,0.84,0.49 c1.48-1.53,2.4-3.61,2.4-5.91C19.55,9.11,18.44,6.86,16.7,5.3z"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M12.15,13.86L10.7,15.3c-1.97-1.46-3.25-3.78-3.25-6.42c0-0.66,0.08-1.31,0.24-1.92c0.12-0.5-0.48-0.86-0.84-0.49 c-1.48,1.53-2.4,3.61-2.4,5.91c0,2.52,1.1,4.77,2.84,6.33l-1.44,1.44c-0.32,0.32-0.09,0.85,0.35,0.85h6.29 c0.28,0,0.5-0.22,0.5-0.5v-6.29C13,13.77,12.46,13.54,12.15,13.86z"
})))));

const MaterialWifiProtectedSetupRounded = (styled.default || styled)(MaterialWifiProtectedSetupRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialWifiProtectedSetupRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialWifiProtectedSetupRounded;