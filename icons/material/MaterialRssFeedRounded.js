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

const MaterialRssFeedRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6.18",
  cy: "17.82",
  r: "2.18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5.59 10.23c-.84-.14-1.59.55-1.59 1.4 0 .71.53 1.28 1.23 1.4 2.92.51 5.22 2.82 5.74 5.74.12.7.69 1.23 1.4 1.23.85 0 1.54-.75 1.41-1.59-.68-4.2-3.99-7.51-8.19-8.18zm-.03-5.71C4.73 4.43 4 5.1 4 5.93c0 .73.55 1.33 1.27 1.4 6.01.6 10.79 5.38 11.39 11.39.07.73.67 1.28 1.4 1.28.84 0 1.5-.73 1.42-1.56-.73-7.34-6.57-13.19-13.92-13.92z"
}));

const MaterialRssFeedRounded = (styled.default || styled)(MaterialRssFeedRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialRssFeedRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialRssFeedRounded;