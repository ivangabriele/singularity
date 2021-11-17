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

const MaterialIntegrationInstructionsTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
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
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "3.5",
  fill: "none",
  r: ".75"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "3.5",
  fill: "none",
  r: ".75"
}), /*#__PURE__*/React.createElement("line", {
  fill: "none",
  x1: "19",
  x2: "5",
  y1: "5",
  y2: "5"
}), /*#__PURE__*/React.createElement("line", {
  fill: "none",
  x1: "5",
  x2: "19",
  y1: "19",
  y2: "19"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
  points: "11,14.17 8.83,12 11,9.83 9.59,8.41 6,12 9.59,15.59"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "14.41,15.59 18,12 14.41,8.41 13,9.83 15.17,12 13,14.17"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19,3h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C4.86,3,4.73,3.01,4.6,3.04C4.21,3.12,3.86,3.32,3.59,3.59 c-0.18,0.18-0.33,0.4-0.43,0.64C3.06,4.46,3,4.72,3,5v10v1v3c0,0.27,0.06,0.54,0.16,0.78c0.1,0.24,0.25,0.45,0.43,0.64 c0.27,0.27,0.62,0.47,1.01,0.55C4.73,20.99,4.86,21,5,21h14c1.1,0,2-0.9,2-2v-3v-1V5C21,3.9,20.1,3,19,3z M12,2.75 c0.41,0,0.75,0.34,0.75,0.75S12.41,4.25,12,4.25s-0.75-0.34-0.75-0.75S11.59,2.75,12,2.75z M19,19H5V5h14V19z"
}))), /*#__PURE__*/React.createElement("line", {
  fill: "none",
  opacity: ".3",
  x1: "19",
  x2: "5",
  y1: "5",
  y2: "5"
}), /*#__PURE__*/React.createElement("line", {
  fill: "none",
  opacity: ".3",
  x1: "5",
  x2: "19",
  y1: "19",
  y2: "19"
}), /*#__PURE__*/React.createElement("rect", {
  height: "14",
  opacity: ".3",
  width: "14",
  x: "5",
  y: "5"
}));

const MaterialIntegrationInstructionsTwoTone = (styled.default || styled)(MaterialIntegrationInstructionsTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialIntegrationInstructionsTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialIntegrationInstructionsTwoTone;