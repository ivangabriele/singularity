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

const MaterialAdminPanelSettingsTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
  d: "M16,7.58l-5.5-2.4L5,7.58v3.6c0,3.5,2.33,6.74,5.5,7.74c0.25-0.08,0.49-0.2,0.73-0.3 C11.08,18.11,11,17.56,11,17c0-2.97,2.16-5.43,5-5.91V7.58z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17,13c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4C21,14.79,19.21,13,17,13z M17,14.38 c0.62,0,1.12,0.51,1.12,1.12s-0.51,1.12-1.12,1.12s-1.12-0.51-1.12-1.12S16.38,14.38,17,14.38z M17,19.75 c-0.93,0-1.74-0.46-2.24-1.17c0.05-0.72,1.51-1.08,2.24-1.08s2.19,0.36,2.24,1.08C18.74,19.29,17.93,19.75,17,19.75z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17",
  cy: "15.5",
  r: "1.12"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18,11.09V6.27L10.5,3L3,6.27v4.91c0,4.54,3.2,8.79,7.5,9.82c0.55-0.13,1.08-0.32,1.6-0.55C13.18,21.99,14.97,23,17,23 c3.31,0,6-2.69,6-6C23,14.03,20.84,11.57,18,11.09z M11,17c0,0.56,0.08,1.11,0.23,1.62c-0.24,0.11-0.48,0.22-0.73,0.3 c-3.17-1-5.5-4.24-5.5-7.74v-3.6l5.5-2.4l5.5,2.4v3.51C13.16,11.57,11,14.03,11,17z M17,21c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4 s4,1.79,4,4C21,19.21,19.21,21,17,21z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17,17.5c-0.73,0-2.19,0.36-2.24,1.08c0.5,0.71,1.32,1.17,2.24,1.17s1.74-0.46,2.24-1.17C19.19,17.86,17.73,17.5,17,17.5z"
}))));

const MaterialAdminPanelSettingsTwoTone = (styled.default || styled)(MaterialAdminPanelSettingsTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialAdminPanelSettingsTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialAdminPanelSettingsTwoTone;