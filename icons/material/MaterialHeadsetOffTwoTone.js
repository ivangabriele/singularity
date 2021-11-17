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
const MaterialHeadsetOffTwoToneSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "4",
  opacity: ".3",
  width: "2",
  x: "5",
  y: "14"
}), /*#__PURE__*/React.createElement("polygon", {
  opacity: ".3",
  points: "16.83,14 19,16.17 19,14"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M12,4c3.87,0,7,3.13,7,7v1h-4v0.17L16.83,14H19v2.17l2,2V11c0-4.97-4.03-9-9-9C9.98,2,8.12,2.67,6.62,3.8l1.43,1.43 C9.17,4.45,10.53,4,12,4z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2.1,2.1L0.69,3.51l3.33,3.33C3.37,8.09,3,9.5,3,11v7c0,1.1,0.9,2,2,2h4v-8H5v-1c0-0.94,0.19-1.83,0.52-2.65L15,17.83V20 h2.17l1,1H12v2h7c0.34,0,0.65-0.09,0.93-0.24l0.55,0.55l1.41-1.41L2.1,2.1z M7,14v4H5v-4H7z"
}))));
const MaterialHeadsetOffTwoTone = (styled.default || styled)(MaterialHeadsetOffTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialHeadsetOffTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialHeadsetOffTwoTone;