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
const MaterialBluetoothConnectedRoundedSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 13c.55-.55.55-1.44 0-1.99V11c-.55-.55-1.45-.55-2 0s-.55 1.45 0 2 1.45.55 2 0zm14-2c-.56-.56-1.45-.56-2-.01V11c-.55.55-.55 1.44 0 1.99V13c.55.55 1.44.55 1.99 0H20c.55-.55.55-1.45 0-2zm-3-4l-4.29-4.29c-.63-.63-1.71-.19-1.71.7v6.18L7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L11 14.41v6.18c0 .89 1.08 1.34 1.71.71L17 17c.39-.39.39-1.02 0-1.42L13.41 12 17 8.42c.39-.39.39-1.03 0-1.42zm-2.12 9.29L13 18.17v-3.76l1.88 1.88zM13 9.59V5.83l1.88 1.88L13 9.59z"
}));
const MaterialBluetoothConnectedRounded = (styled.default || styled)(MaterialBluetoothConnectedRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialBluetoothConnectedRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialBluetoothConnectedRounded;