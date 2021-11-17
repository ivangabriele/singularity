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

const MaterialNordicWalkingRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M18.25,23c-0.41,0-0.75-0.34-0.75-0.75V14H19v8.25C19,22.66,18.66,23,18.25,23z M4.93,23c0.35,0,0.66-0.24,0.73-0.59 L7.53,14H6l-1.8,8.09C4.1,22.56,4.45,23,4.93,23z M13.5,5.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S12.4,5.5,13.5,5.5z M14,23 c0.55,0,1-0.45,1-1v-5.64c0-0.55-0.22-1.07-0.62-1.45L12.9,13.5l0.6-3c1.07,1.24,2.62,2.13,4.36,2.41c0.6,0.1,1.14-0.38,1.14-0.99 c0-0.49-0.35-0.91-0.83-0.98c-1.53-0.24-2.79-1.14-3.47-2.33l-1-1.6c-0.56-0.89-1.68-1.25-2.66-0.84L7.22,7.78 C6.48,8.1,6,8.82,6,9.62V12c0,0.55,0.45,1,1,1s1-0.45,1-1V9.6l1.8-0.7L7.25,21.76C7.12,22.4,7.61,23,8.27,23 c0.49,0,0.91-0.34,1.02-0.81L10.9,15l2.1,2v5C13,22.55,13.45,23,14,23z"
}));

const MaterialNordicWalkingRounded = (styled.default || styled)(MaterialNordicWalkingRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialNordicWalkingRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialNordicWalkingRounded;