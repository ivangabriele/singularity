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

const MaterialUpcomingRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M20.45,6.55L20.45,6.55c-0.38-0.38-1.01-0.38-1.39,0L16.89,8.7c-0.39,0.38-0.39,1.01,0,1.39l0.01,0.01 c0.39,0.39,1.01,0.39,1.4,0c0.62-0.63,1.52-1.54,2.15-2.17C20.83,7.55,20.83,6.93,20.45,6.55z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.02,3h-0.03C11.44,3,11,3.44,11,3.98v3.03C11,7.56,11.44,8,11.98,8h0.03C12.56,8,13,7.56,13,7.02V3.98 C13,3.44,12.56,3,12.02,3z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.1,10.11l0.01-0.01c0.38-0.38,0.38-1.01,0-1.39L4.96,6.54c-0.38-0.39-1.01-0.39-1.39,0L3.55,6.55 c-0.39,0.39-0.39,1.01,0,1.39c0.63,0.62,1.53,1.54,2.15,2.17C6.09,10.49,6.72,10.49,7.1,10.11z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,15c-1.24,0-2.31-0.75-2.76-1.83C8.92,12.43,8.14,12,7.34,12L4,12c-1.1,0-2,0.9-2,2l0,5c0,1.1,0.9,2,2,2h16 c1.1,0,2-0.9,2-2v-5c0-1.1-0.9-2-2-2l-3.34,0c-0.8,0-1.58,0.43-1.9,1.17C14.31,14.25,13.24,15,12,15"
}))));

const MaterialUpcomingRounded = (styled.default || styled)(MaterialUpcomingRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialUpcomingRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialUpcomingRounded;