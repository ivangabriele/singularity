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
const MaterialChaletTwoToneSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
}), /*#__PURE__*/React.createElement("polygon", {
  opacity: ".3",
  points: "13,18 11,18 11,15 9,15 9,18 7,18 7,13.33 10,10.33 13,13.33"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5,15L10,7.5L2.5,15l1.41,1.41L5,15.33V20h10v-4.67l1.09,1.09L17.5,15z M13,18h-2v-3H9v3H7v-4.67l3-3l3,3V18z M22,7.5 h-1.19l0.75,0.75l-0.71,0.71L19.39,7.5H18.5v0.89l1.45,1.45l-0.71,0.71L18.5,9.81V11h-1V9.81l-0.75,0.75l-0.71-0.71l1.45-1.45V7.5 h-0.89l-1.45,1.45l-0.71-0.71l0.75-0.75H14v-1h1.19l-0.75-0.75l0.71-0.71l1.45,1.45h0.89V5.61l-1.45-1.45l0.71-0.71l0.75,0.75V3h1 v1.19l0.75-0.75l0.71,0.71L18.5,5.61V6.5h0.89l1.45-1.45l0.71,0.71L20.81,6.5H22V7.5z"
}));
const MaterialChaletTwoTone = (styled.default || styled)(MaterialChaletTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialChaletTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialChaletTwoTone;