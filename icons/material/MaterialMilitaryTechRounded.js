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
const MaterialMilitaryTechRoundedSvg = /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M17,10.43V3c0-0.55-0.45-1-1-1H8C7.45,2,7,2.45,7,3v7.43c0,0.35,0.18,0.68,0.49,0.86l4.18,2.51l-0.99,2.34l-2.22,0.19 C8,16.37,7.82,16.92,8.16,17.21l1.69,1.46l-0.51,2.18c-0.1,0.43,0.37,0.77,0.75,0.54L12,20.23l1.91,1.15 c0.38,0.23,0.85-0.11,0.75-0.54l-0.51-2.18l1.69-1.46c0.33-0.29,0.16-0.84-0.29-0.88l-2.22-0.19l-0.99-2.34l4.18-2.51 C16.82,11.11,17,10.79,17,10.43z M13,12.23l-1,0.6l-1-0.6V3h2V12.23z"
})));
const MaterialMilitaryTechRounded = (styled.default || styled)(MaterialMilitaryTechRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialMilitaryTechRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialMilitaryTechRounded;