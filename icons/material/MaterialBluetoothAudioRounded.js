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
const MaterialBluetoothAudioRoundedSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.98 10.28l-1.38 1.38c-.2.2-.2.51 0 .71l1.38 1.38c.28.28.75.15.85-.23.11-.5.17-1 .17-1.52 0-.51-.06-1.01-.18-1.48-.09-.38-.56-.52-.84-.24zm4.12-2.5c-.25-.55-.98-.67-1.4-.24-.26.26-.31.64-.17.98.46 1.07.72 2.24.72 3.47 0 1.24-.26 2.42-.73 3.49-.14.32-.09.69.16.94.41.41 1.1.29 1.35-.23.63-1.3.98-2.76.98-4.3-.01-1.45-.33-2.85-.91-4.11zM11.39 12l3.59-3.58c.39-.39.39-1.02 0-1.42l-4.29-4.29c-.63-.63-1.71-.18-1.71.71V9.6L5.09 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L8.57 12l-4.89 4.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l3.89-3.89v6.18c0 .89 1.08 1.34 1.71.71l4.3-4.3c.39-.39.39-1.02 0-1.42L11.39 12zm-.41-6.17l1.88 1.88-1.88 1.88V5.83zm0 12.34v-3.76l1.88 1.88-1.88 1.88z"
}));
const MaterialBluetoothAudioRounded = (styled.default || styled)(MaterialBluetoothAudioRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialBluetoothAudioRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialBluetoothAudioRounded;