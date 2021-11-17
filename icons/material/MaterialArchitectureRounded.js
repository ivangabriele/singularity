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

const MaterialArchitectureRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M6.36,18.78L6.61,21l1.62-1.54l2.77-7.6c-0.68-0.17-1.28-0.51-1.77-0.98L6.36,18.78z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.77,10.88c-0.49,0.47-1.1,0.81-1.77,0.98l2.77,7.6L17.39,21l0.26-2.22L14.77,10.88z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.94,8.6c0.3-1.56-0.6-2.94-1.94-3.42V4c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v1.18C9.84,5.6,9,6.7,9,8 c0,1.84,1.66,3.3,3.56,2.95C13.74,10.73,14.71,9.78,14.94,8.6z M12,9c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1 C13,8.55,12.55,9,12,9z"
}))));

const MaterialArchitectureRounded = (styled.default || styled)(MaterialArchitectureRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialArchitectureRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialArchitectureRounded;