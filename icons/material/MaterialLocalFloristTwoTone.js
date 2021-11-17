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

const MaterialLocalFloristTwoToneSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 13c.62 0 1.12-.49 1.14-1.1l-.11-1.09c-.32.12-.67.19-1.03.19s-.7-.07-1.02-.19l-.12 1.09c.02.61.52 1.1 1.14 1.1zM8.17 7.1l.88.42c.12-.73.51-1.37 1.06-1.83l-.81-.56c-.18-.13-.41-.2-.64-.2-.63 0-1.14.51-1.14 1.14-.01.44.25.83.65 1.03zm7.66 1.8l-.88-.42c-.12.73-.51 1.37-1.06 1.83l.81.57c.18.13.41.2.64.2.63 0 1.14-.51 1.14-1.14.01-.45-.25-.84-.65-1.04zm-.88-1.38l.88-.42c.4-.19.66-.59.66-1.03 0-.63-.51-1.14-1.14-1.14-.24 0-.46.07-.65.2l-.81.55c.55.46.94 1.1 1.06 1.84zM12 5c.36 0 .71.07 1.03.19l.11-1.09C13.12 3.49 12.62 3 12 3s-1.12.49-1.14 1.1l.12 1.09C11.3 5.07 11.64 5 12 5zm-3.34 6.07c.24 0 .46-.07.65-.2l.81-.55c-.56-.46-.95-1.1-1.07-1.84l-.88.42c-.4.2-.66.59-.66 1.03 0 .63.52 1.14 1.15 1.14zm9.9 4.37c-1.9.71-3.42 2.22-4.12 4.12 1.9-.71 3.41-2.22 4.12-4.12zm-13.12 0c.71 1.9 2.22 3.42 4.12 4.12-.71-1.9-2.22-3.41-4.12-4.12z",
  opacity: ".3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.66 13.07c.15 0 .29-.01.43-.03C9.56 14.19 10.69 15 12 15s2.44-.81 2.91-1.96c.14.02.29.03.43.03 1.73 0 3.14-1.41 3.14-3.14 0-.71-.25-1.39-.67-1.93.43-.54.67-1.22.67-1.93 0-1.73-1.41-3.14-3.14-3.14-.15 0-.29.01-.43.03C14.44 1.81 13.31 1 12 1s-2.44.81-2.91 1.96c-.14-.02-.29-.03-.43-.03-1.73 0-3.14 1.41-3.14 3.14 0 .71.25 1.39.67 1.93-.43.54-.68 1.22-.68 1.93 0 1.73 1.41 3.14 3.15 3.14zm6.68-2c-.24 0-.46-.07-.64-.2l-.81-.57c.55-.45.94-1.09 1.06-1.83l.88.42c.4.19.66.59.66 1.03 0 .64-.52 1.15-1.15 1.15zm-.65-5.94c.2-.13.42-.2.65-.2.63 0 1.14.51 1.14 1.14 0 .44-.25.83-.66 1.03l-.88.42c-.12-.74-.51-1.38-1.07-1.83l.82-.56zM12 3c.62 0 1.12.49 1.14 1.1l-.11 1.09C12.71 5.07 12.36 5 12 5s-.7.07-1.02.19l-.12-1.09c.02-.61.52-1.1 1.14-1.1zm1 5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-2.02 2.81c.32.12.66.19 1.02.19s.71-.07 1.03-.19l.11 1.09c-.02.61-.52 1.1-1.14 1.1s-1.12-.49-1.14-1.1l.12-1.09zM8.66 4.93c.24 0 .46.07.64.2l.81.56c-.55.45-.94 1.09-1.06 1.83l-.88-.42c-.4-.2-.66-.59-.66-1.03 0-.63.52-1.14 1.15-1.14zM8.17 8.9l.88-.42c.12.74.51 1.38 1.07 1.83l-.81.55c-.2.13-.42.2-.65.2-.63 0-1.14-.51-1.14-1.14-.01-.43.25-.82.65-1.02zM12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zm6.56-6.56c-.71 1.9-2.22 3.42-4.12 4.12.71-1.9 2.22-3.41 4.12-4.12zM3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9zm2.44 2.44c1.9.71 3.42 2.22 4.12 4.12-1.9-.71-3.41-2.22-4.12-4.12z"
}));

const MaterialLocalFloristTwoTone = (styled.default || styled)(MaterialLocalFloristTwoToneSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialLocalFloristTwoTone.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialLocalFloristTwoTone;