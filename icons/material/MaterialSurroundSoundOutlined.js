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
const MaterialSurroundSoundOutlinedSvg = /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.29,15.71C7.27,14.69,6.75,13.35,6.75,12c0-1.35,0.52-2.69,1.53-3.72L7.05,7.05C5.68,8.41,5,10.21,5,12 s0.68,3.59,2.06,4.94L8.29,15.71z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,15.5c1.93,0,3.5-1.57,3.5-3.5c0-1.93-1.57-3.5-3.5-3.5c-1.93,0-3.5,1.57-3.5,3.5C8.5,13.93,10.07,15.5,12,15.5z M12,10.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,10.5,12,10.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.72,15.72l1.23,1.23C18.32,15.59,19,13.79,19,12s-0.68-3.59-2.06-4.94l-1.23,1.23c1.02,1.02,1.54,2.36,1.54,3.71 C17.25,13.35,16.73,14.69,15.72,15.72z"
}))));
const MaterialSurroundSoundOutlined = (styled.default || styled)(MaterialSurroundSoundOutlinedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialSurroundSoundOutlined.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialSurroundSoundOutlined;