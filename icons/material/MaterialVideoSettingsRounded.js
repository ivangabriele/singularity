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

const MaterialVideoSettingsRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
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
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M4,6h16c0.55,0,1,0.45,1,1v4h2V6c0-1.1-0.9-2-2-2H3C1.9,4,1,4.9,1,6v12c0,1.1,0.9,2,2,2h9v-2H4c-0.55,0-1-0.45-1-1V7 C3,6.45,3.45,6,4,6z"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "15,12 9,8 9,16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.71,18.43c0.03-0.29,0.04-0.58,0.01-0.86l1.07-0.85c0.1-0.08,0.12-0.21,0.06-0.32l-1.03-1.79 c-0.06-0.11-0.19-0.15-0.31-0.11L21.23,15c-0.23-0.17-0.48-0.31-0.75-0.42l-0.2-1.36C20.26,13.09,20.16,13,20.03,13h-2.07 c-0.12,0-0.23,0.09-0.25,0.21l-0.2,1.36c-0.26,0.11-0.51,0.26-0.74,0.42l-1.28-0.5c-0.12-0.05-0.25,0-0.31,0.11l-1.03,1.79 c-0.06,0.11-0.04,0.24,0.06,0.32l1.07,0.86c-0.03,0.29-0.04,0.58-0.01,0.86l-1.07,0.85c-0.1,0.08-0.12,0.21-0.06,0.32l1.03,1.79 c0.06,0.11,0.19,0.15,0.31,0.11l1.27-0.5c0.23,0.17,0.48,0.31,0.75,0.42l0.2,1.36c0.02,0.12,0.12,0.21,0.25,0.21h2.07 c0.12,0,0.23-0.09,0.25-0.21l0.2-1.36c0.26-0.11,0.51-0.26,0.74-0.42l1.28,0.5c0.12,0.05,0.25,0,0.31-0.11l1.03-1.79 c0.06-0.11,0.04-0.24-0.06-0.32L22.71,18.43z M19,19.5c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5 S19.83,19.5,19,19.5z"
}))));

const MaterialVideoSettingsRounded = (styled.default || styled)(MaterialVideoSettingsRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialVideoSettingsRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialVideoSettingsRounded;