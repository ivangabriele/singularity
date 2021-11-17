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

const MaterialSickTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M7.32,10.56L8.38,9.5L7.32,8.44l1.06-1.06L10.5,9.5l-2.12,2.12L7.32,10.56z M4.5,9c0.03,0,0.05,0.01,0.08,0.01 C5.77,6.07,8.64,4,12,4c2.19,0,4.16,0.88,5.61,2.3c0.15-0.6,0.45-1.29,0.81-1.96C16.68,2.88,14.44,2,11.99,2 c-4.88,0-8.94,3.51-9.81,8.14C2.74,9.44,3.59,9,4.5,9z M21,10.5c-0.42,0-0.82-0.09-1.19-0.22C19.93,10.83,20,11.41,20,12 c0,4.42-3.58,8-8,8c-3.36,0-6.23-2.07-7.42-5.01C4.55,14.99,4.53,15,4.5,15c-0.52,0-1.04-0.14-1.5-0.4 c-0.32-0.18-0.59-0.42-0.82-0.7c0.89,4.61,4.93,8.1,9.8,8.1C17.52,22,22,17.52,22,12c0-0.55-0.06-1.09-0.14-1.62 C21.58,10.45,21.3,10.5,21,10.5z M21,3c0,0-2,2.9-2,4c0,1.1,0.9,2,2,2s2-0.9,2-2C23,5.9,21,3,21,3z M15.62,7.38L13.5,9.5l2.12,2.12 l1.06-1.06L15.62,9.5l1.06-1.06L15.62,7.38z M8.56,17c0.69-1.19,1.97-2,3.44-2s2.75,0.81,3.44,2h1.68c-0.8-2.05-2.79-3.5-5.12-3.5 c-0.87,0-1.7,0.2-2.43,0.57l0,0L5.99,12c0-0.52-0.26-1.02-0.74-1.29c-0.72-0.41-1.63-0.17-2.05,0.55c-0.41,0.72-0.17,1.63,0.55,2.05 c0.48,0.28,1.05,0.25,1.49,0l2.97,1.72l0,0C7.64,15.56,7.18,16.24,6.88,17H8.56z"
}));

const MaterialSickTwoTone = (styled.default || styled)(MaterialSickTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialSickTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialSickTwoTone;