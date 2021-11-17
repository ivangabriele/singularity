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

const MaterialRoomPreferencesTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("path", {
  d: "M13,12.11V5H7v14h4.29C11.1,18.37,11,17.7,11,17C11,15.09,11.76,13.37,13,12.11 z M10,11h2v2h-2V11z",
  "enable-background": "new",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,13h-2v-2h2V13z M7,19V5h6v7.11c0.57-0.59,1.25-1.07,2-1.42V6h2v4h1h1V4h-4V3H5v16H3v2h9.26c-0.42-0.6-0.75-1.28-0.97-2 H7z M21.69,17.63l1.14,1l-1,1.73l-1.45-0.49c-0.32,0.27-0.68,0.48-1.08,0.63L19,22h-2l-0.3-1.49c-0.4-0.15-0.76-0.36-1.08-0.63 l-1.45,0.49l-1-1.73l1.14-1c-0.08-0.5-0.08-0.76,0-1.26l-1.14-1l1-1.73l1.45,0.49c0.32-0.27,0.68-0.48,1.08-0.63L17,12h2l0.3,1.49 c0.4,0.15,0.76,0.36,1.08,0.63l1.45-0.49l1,1.73l-1.14,1C21.77,16.87,21.77,17.13,21.69,17.63z M20,17c0-1.1-0.9-2-2-2s-2,0.9-2,2 s0.9,2,2,2S20,18.1,20,17z"
})));

const MaterialRoomPreferencesTwoTone = (styled.default || styled)(MaterialRoomPreferencesTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialRoomPreferencesTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialRoomPreferencesTwoTone;