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

const MaterialPhonelinkSetupSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10.82 12.49c.02-.16.04-.32.04-.49 0-.17-.02-.33-.04-.49l1.08-.82c.1-.07.12-.21.06-.32l-1.03-1.73c-.06-.11-.2-.15-.31-.11l-1.28.5c-.27-.2-.56-.36-.87-.49l-.2-1.33c0-.12-.11-.21-.24-.21H5.98c-.13 0-.24.09-.26.21l-.2 1.32c-.31.12-.6.3-.87.49l-1.28-.5c-.12-.05-.25 0-.31.11l-1.03 1.73c-.06.12-.03.25.07.33l1.08.82c-.02.16-.03.33-.03.49 0 .17.02.33.04.49l-1.09.83c-.1.07-.12.21-.06.32l1.03 1.73c.06.11.2.15.31.11l1.28-.5c.27.2.56.36.87.49l.2 1.32c.01.12.12.21.25.21h2.06c.13 0 .24-.09.25-.21l.2-1.32c.31-.12.6-.3.87-.49l1.28.5c.12.05.25 0 .31-.11l1.03-1.73c.06-.11.04-.24-.06-.32l-1.1-.83zM7 13.75c-.99 0-1.8-.78-1.8-1.75s.81-1.75 1.8-1.75 1.8.78 1.8 1.75S8 13.75 7 13.75zM18 1.01L8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z"
}));

const MaterialPhonelinkSetup = (styled.default || styled)(MaterialPhonelinkSetupSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialPhonelinkSetup.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialPhonelinkSetup;