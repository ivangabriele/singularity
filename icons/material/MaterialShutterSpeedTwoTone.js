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

const MaterialShutterSpeedTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 6c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 1c.46 0 .9.06 1.33.15l-2.72 4.7-2.32-3.56C9.31 7.49 10.6 7 12 7zm-6 6c0-1.54.59-2.95 1.55-4.01L10.81 14H6.09c-.05-.33-.09-.66-.09-1zm.35 2h5.33l-2.03 3.5.11.06c-1.59-.64-2.84-1.94-3.41-3.56zM12 19c-.48 0-.94-.06-1.39-.17l2.85-4.92 2.11 3.9c-1 .74-2.23 1.19-3.57 1.19zm6-6c0 1.6-.63 3.06-1.66 4.13L13.57 12h4.34c.05.33.09.66.09 1zm-5.74-2l2.05-3.54c1.56.65 2.77 1.94 3.34 3.54h-5.39z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.55 8.99C6.59 10.05 6 11.46 6 13c0 .34.04.67.09 1h4.72L7.55 8.99zm6.76-1.53L12.26 11h5.39c-.57-1.6-1.78-2.89-3.34-3.54zm-.98-.31C12.9 7.06 12.46 7 12 7c-1.4 0-2.69.49-3.71 1.29l2.32 3.56 2.72-4.7zM11.68 15H6.35c.57 1.62 1.82 2.92 3.41 3.56l-.11-.06 2.03-3.5zm7.35-7.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zM9 1h6v2H9zm7.34 16.13C17.37 16.06 18 14.6 18 13c0-.34-.04-.67-.09-1h-4.34l2.77 5.13zm-5.73 1.7c.45.11.91.17 1.39.17 1.34 0 2.57-.45 3.57-1.19l-2.11-3.9-2.85 4.92z"
}));

const MaterialShutterSpeedTwoTone = (styled.default || styled)(MaterialShutterSpeedTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialShutterSpeedTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialShutterSpeedTwoTone;