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
const MaterialMarginTwoToneSvg = /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M5,19h14V5H5V19z M15,7h2v2h-2V7z M15,11h2v2h-2V11z M11,7h2v2h-2V7z M11,11h2v2h-2V11z M7,7h2v2H7V7z M7,11h2v2H7V11z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "7",
  y: "7"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "7",
  y: "11"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3,3v18h18V3H3z M19,19H5V5h14V19z"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "11",
  y: "7"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "15",
  y: "11"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "11",
  y: "11"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "2",
  x: "15",
  y: "7"
}))));
const MaterialMarginTwoTone = (styled.default || styled)(MaterialMarginTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialMarginTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialMarginTwoTone;