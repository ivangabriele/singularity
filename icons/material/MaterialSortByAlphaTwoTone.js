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
const MaterialSortByAlphaTwoToneSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.94 4.66L12.58 2.3l-2.36 2.36zm-4.55 13.07h1.84L7.74 6.27H6.1L1.6 17.73h1.84l.92-2.45h5.11l.92 2.45zm-5.42-4.09l1.94-5.18 1.94 5.18H4.97zm7.61 8.06l2.33-2.33h-4.66zm9.08-14.16V6.28h-8.3v1.6h5.88l-5.92 8.56v1.29h8.53v-1.59h-6.12z"
}));
const MaterialSortByAlphaTwoTone = (styled.default || styled)(MaterialSortByAlphaTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialSortByAlphaTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialSortByAlphaTwoTone;