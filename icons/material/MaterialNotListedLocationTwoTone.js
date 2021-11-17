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

const MaterialNotListedLocationTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  version: "1",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.5,10.2c0,2.57-2.1,5.79-6.16,9.51L12,20.01l-0.34-0.31C7.6,15.99,5.5,12.77,5.5,10.2 c0-3.84,2.82-6.7,6.5-6.7S18.5,6.35,18.5,10.2z",
  "fill-opacity": ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.01,16c-0.27,0-0.52-0.1-0.71-0.29c-0.2-0.2-0.29-0.43-0.29-0.71c-0.01-0.55,0.43-0.99,0.98-1c0.01,0,0.01,0,0.02,0 c0.28,0,0.51,0.1,0.71,0.29c0.18,0.19,0.28,0.43,0.28,0.7s-0.1,0.51-0.29,0.71S12.28,16,12.01,16z M11.13,12.34 c0-0.45,0.1-0.84,0.29-1.16c0.19-0.33,0.53-0.7,1-1.12c0.28-0.25,0.48-0.47,0.61-0.66s0.19-0.4,0.19-0.64 c0-0.29-0.11-0.53-0.32-0.74c-0.21-0.2-0.5-0.3-0.85-0.3c-0.37,0-0.74,0.1-0.96,0.3c-0.21,0.2-0.4,0.45-0.4,0.98H9 c0-1.01,0.46-1.73,0.97-2.21C10.53,6.28,11.25,6,12,6c0.59,0,1.11,0.12,1.57,0.35C14.45,6.78,15,7.68,15,8.66 c0,0.49-0.1,0.9-0.31,1.25S14.21,10.62,13.8,11c-0.32,0.3-0.53,0.56-0.65,0.77s-0.18,0.49-0.18,0.81V13h-1.85v-0.66H11.13z M18,10.2 C18,6.57,15.35,4,12,4s-6,2.57-6,6.2c0,2.34,1.95,5.44,6,9.14C16.05,15.64,18,12.54,18,10.2z M12,2c4.2,0,8,3.22,8,8.2 c0,3.32-2.67,7.25-8,11.8c-5.33-4.55-8-8.48-8-11.8C4,5.22,7.8,2,12,2z"
}));

const MaterialNotListedLocationTwoTone = (styled.default || styled)(MaterialNotListedLocationTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialNotListedLocationTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialNotListedLocationTwoTone;