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

const MaterialFestivalTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  fill: "none",
  height: "24",
  width: "24",
  y: "0"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M5.24,14.42C5.2,16.18,5.06,18.14,4.66,20h2.67c0.27-1.94,0.43-4.07,0.52-5.93C7.54,13.9,7.25,13.7,7,13.44 C6.53,13.93,5.92,14.27,5.24,14.42z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11,11H8c0,0.83,0.67,1.5,1.5,1.5S11,11.83,11,11z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6,11H3c0,0.83,0.67,1.5,1.5,1.5S6,11.83,6,11z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,4.71C10.67,5.85,8.51,7.55,5.89,9h12.23C15.49,7.55,13.33,5.85,12,4.71z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.5,12.5c0.83,0,1.5-0.67,1.5-1.5h-3C18,11.83,18.67,12.5,19.5,12.5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.5,12.5c0.83,0,1.5-0.67,1.5-1.5h-3C13,11.83,13.67,12.5,14.5,12.5z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17,13.44c-0.25,0.25-0.54,0.45-0.85,0.62c0.1,1.87,0.26,4,0.52,5.93h2.67c-0.39-1.86-0.54-3.82-0.57-5.58 C18.08,14.27,17.47,13.93,17,13.44z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12,2c0,0-5,5-11,7v2c0,1.49,0.93,2.75,2.24,3.26C3.2,16.76,2.92,19.69,2,22h20c-0.92-2.31-1.2-5.24-1.24-7.74 C22.07,13.75,23,12.49,23,11V9C17,7,12,2,12,2z M12,4.71c1.33,1.14,3.49,2.84,6.11,4.29H5.89C8.51,7.55,10.67,5.85,12,4.71z M3,11 h3c0,0.83-0.67,1.5-1.5,1.5S3,11.83,3,11z M7.33,20H4.66c0.39-1.86,0.54-3.82,0.57-5.58c0.68-0.15,1.29-0.49,1.76-0.98 c0.25,0.25,0.54,0.45,0.85,0.62C7.76,15.93,7.6,18.06,7.33,20z M8,11h3c0,0.83-0.67,1.5-1.5,1.5S8,11.83,8,11z M9.35,20 c0.24-1.83,0.39-3.78,0.48-5.53c0.84-0.08,1.61-0.45,2.17-1.02c0.56,0.57,1.32,0.94,2.17,1.02c0.1,1.75,0.24,3.7,0.48,5.53H9.35z M14.5,12.5c-0.83,0-1.5-0.67-1.5-1.5h3C16,11.83,15.33,12.5,14.5,12.5z M16.67,20c-0.27-1.94-0.43-4.07-0.52-5.93 c0.31-0.17,0.61-0.37,0.85-0.62c0.47,0.48,1.08,0.83,1.76,0.98c0.03,1.76,0.18,3.72,0.57,5.58H16.67z M19.5,12.5 c-0.83,0-1.5-0.67-1.5-1.5h3C21,11.83,20.33,12.5,19.5,12.5z"
}))));

const MaterialFestivalTwoTone = (styled.default || styled)(MaterialFestivalTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialFestivalTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialFestivalTwoTone;