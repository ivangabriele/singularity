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

const MaterialEditAttributesTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.63 9H6.37C5.09 9 4 10.37 4 12s1.09 3 2.37 3h11.26c1.28 0 2.37-1.37 2.37-3s-1.09-3-2.37-3zM7.24 14.46l-2.57-2.57.7-.7 1.87 1.87 3.52-3.52.7.7-4.22 4.22z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.63 7H6.37C3.96 7 2 9.24 2 12s1.96 5 4.37 5h11.26c2.41 0 4.37-2.24 4.37-5s-1.96-5-4.37-5zm0 8H6.37C5.09 15 4 13.63 4 12s1.09-3 2.37-3h11.26C18.91 9 20 10.37 20 12s-1.09 3-2.37 3zM7.24 13.06l-1.87-1.87-.7.7 2.57 2.57 4.22-4.22-.7-.7z"
}));

const MaterialEditAttributesTwoTone = (styled.default || styled)(MaterialEditAttributesTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialEditAttributesTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialEditAttributesTwoTone;