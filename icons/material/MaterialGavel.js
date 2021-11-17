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
const MaterialGavelSvg = /*#__PURE__*/React.createElement("svg", {
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
  x: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "20",
  transform: "matrix(0.7075 -0.7067 0.7067 0.7075 -5.6854 13.7194)",
  width: "4",
  x: "11.73",
  y: "3.73"
}), /*#__PURE__*/React.createElement("rect", {
  height: "8",
  transform: "matrix(0.707 -0.7072 0.7072 0.707 0.3157 11.246)",
  width: "4",
  x: "11.73",
  y: "1.24"
}), /*#__PURE__*/React.createElement("rect", {
  height: "8",
  transform: "matrix(0.7071 -0.7071 0.7071 0.7071 -8.1722 7.7256)",
  width: "4",
  x: "3.24",
  y: "9.73"
}), /*#__PURE__*/React.createElement("rect", {
  height: "2",
  width: "12",
  x: "1",
  y: "21"
}))));
const MaterialGavel = (styled.default || styled)(MaterialGavelSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialGavel.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialGavel;