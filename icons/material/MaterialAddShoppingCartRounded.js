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

const MaterialAddShoppingCartRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,9L12,9c0.55,0,1-0.45,1-1V6h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-2V2c0-0.55-0.45-1-1-1h0c-0.55,0-1,0.45-1,1v2H9 C8.45,4,8,4.45,8,5v0c0,0.55,0.45,1,1,1h2v2C11,8.55,11.45,9,12,9z M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22s2-0.9,2-2S8.1,18,7,18 z M17,18c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2S18.1,18,17,18z M8.1,13h7.45c0.75,0,1.41-0.41,1.75-1.03l3.24-6.14 c0.25-0.48,0.08-1.08-0.4-1.34v0c-0.49-0.27-1.1-0.08-1.36,0.41L15.55,11H8.53L4.27,2H2C1.45,2,1,2.45,1,3v0c0,0.55,0.45,1,1,1h1 l3.6,7.59l-1.35,2.44C4.52,15.37,5.48,17,7,17h11c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H7L8.1,13z"
}));

const MaterialAddShoppingCartRounded = (styled.default || styled)(MaterialAddShoppingCartRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialAddShoppingCartRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialAddShoppingCartRounded;