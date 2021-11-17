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
const MaterialHeightMpTwoToneSvg = /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "1.5",
  opacity: ".3",
  width: "1.5",
  x: "15",
  y: "14"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1.5",
  opacity: ".3",
  width: "1.5",
  x: "11.5",
  y: "6.5"
}), /*#__PURE__*/React.createElement("rect", {
  height: "1.5",
  opacity: ".3",
  width: "1.5",
  x: "11.5",
  y: "9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5,19h14V5H5V19z M18,13.5V16c0,0.55-0.45,1-1,1h-2v1.5h-1.5v-6H17C17.55,12.5,18,12.95,18,13.5z M10,6.5 c0-0.55,0.45-1,1-1h2.5c0.55,0,1,0.45,1,1v4c0,0.55-0.45,1-1,1H11c-0.55,0-1-0.45-1-1V6.5z M6,13.5c0-0.55,0.45-1,1-1h4.5 c0.55,0,1,0.45,1,1v5H11V14h-1v3H8.5v-3h-1v4.5H6V13.5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.5,14h1v3H10v-3h1v4.5h1.5v-5c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v5h1.5V14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.5,18.5H15V17h2c0.55,0,1-0.45,1-1v-2.5c0-0.55-0.45-1-1-1h-3.5V18.5z M15,14h1.5v1.5H15V14z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11,11.5h2.5c0.55,0,1-0.45,1-1v-4c0-0.55-0.45-1-1-1H11c-0.55,0-1,0.45-1,1v4C10,11.05,10.45,11.5,11,11.5z M11.5,6.5H13 V8h-1.5V6.5z M11.5,9H13v1.5h-1.5V9z"
}))));
const MaterialHeightMpTwoTone = (styled.default || styled)(MaterialHeightMpTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialHeightMpTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialHeightMpTwoTone;