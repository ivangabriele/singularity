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
const MaterialWbAutoOutlinedSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 7l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L9 7H7zm-.15 5.65L8 9l1.15 3.65h-2.3zM22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76l-.01.01C12.76 5.18 10.53 4 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c2.96 0 5.55-1.61 6.93-4 .03-.06.05-.12.08-.18.05-.08.09-.17.14-.25l.1.43H17l1.5-6.1L20 16h1.75l2.05-9H22zm-8.63 7.67C12.38 16.64 10.35 18 8 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6c0 .96-.23 1.86-.63 2.67z"
}));
const MaterialWbAutoOutlined = (styled.default || styled)(MaterialWbAutoOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialWbAutoOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialWbAutoOutlined;