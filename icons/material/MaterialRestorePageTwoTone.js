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

const MaterialRestorePageTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 4v16h12V8.83L13.17 4H6zm10.72 9c0 2.48-2.02 4.5-4.5 4.5-1.84 0-3.43-1.12-4.12-2.7h1.54c.57.81 1.51 1.35 2.58 1.35 1.74 0 3.15-1.41 3.15-3.15s-1.41-3.15-3.15-3.15c-1.21 0-2.27.7-2.79 1.71L10.88 13h-3.6V9.4l1.17 1.17c.8-1.24 2.19-2.07 3.78-2.07 2.48 0 4.49 2.02 4.49 4.5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7.17L18 8.83V20zm-9.55-9.43L7.28 9.4V13h3.6l-1.44-1.44c.52-1.01 1.58-1.71 2.79-1.71 1.74 0 3.15 1.41 3.15 3.15s-1.41 3.15-3.15 3.15c-1.07 0-2.02-.54-2.58-1.35H8.1c.69 1.58 2.28 2.7 4.12 2.7 2.48 0 4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5c-1.59 0-2.97.83-3.77 2.07z"
}));

const MaterialRestorePageTwoTone = (styled.default || styled)(MaterialRestorePageTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialRestorePageTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialRestorePageTwoTone;