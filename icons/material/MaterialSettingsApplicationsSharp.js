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

const MaterialSettingsApplicationsSharpSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .24-.02.47-.05.71l.01-.02 1.47 1.16c.14.1.23.18.23.18l-1.7 2.94-2.02-.8.02-.03c-.37.29-.77.53-1.21.71h.01l-.27 1.85c-.02.17-.04.3-.04.3h-3.4l-.31-2.15H10c-.44-.18-.84-.42-1.21-.71l.02.03-2.02.8-1.7-2.94s.1-.08.23-.18l1.47-1.16.01.02c-.03-.24-.05-.47-.05-.71s.02-.47.05-.69l-.01.01-1.7-1.34 1.7-2.95 2.01.81v.01c.37-.28.77-.52 1.2-.7h-.01L10.3 5h3.41l.3 2.15H14c.43.18.83.42 1.2.7v-.01l2.01-.81 1.7 2.95-1.71 1.34-.01-.01c.04.22.06.45.06.69z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "2.45"
}));

const MaterialSettingsApplicationsSharp = (styled.default || styled)(MaterialSettingsApplicationsSharpSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialSettingsApplicationsSharp.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialSettingsApplicationsSharp;