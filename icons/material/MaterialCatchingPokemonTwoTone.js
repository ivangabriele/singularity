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

const MaterialCatchingPokemonTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M12,4c4.08,0,7.45,3.05,7.94,7h-4.06C15.43,9.27,13.86,8,12,8s-3.43,1.27-3.87,3H4.06C4.55,7.05,7.92,4,12,4z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,4c4.08,0,7.45,3.05,7.94,7h-4.06 C15.43,9.27,13.86,8,12,8s-3.43,1.27-3.87,3H4.06C4.55,7.05,7.92,4,12,4z M14,12c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-1.1,0.9-2,2-2 S14,10.9,14,12z M12,20c-4.08,0-7.45-3.05-7.94-7h4.06c0.44,1.73,2.01,3,3.87,3s3.43-1.27,3.87-3h4.06C19.45,16.95,16.08,20,12,20z"
}));

const MaterialCatchingPokemonTwoTone = (styled.default || styled)(MaterialCatchingPokemonTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialCatchingPokemonTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialCatchingPokemonTwoTone;