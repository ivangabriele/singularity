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

const MaterialContactSupportRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm.4-4.78c-.01.01-.02.03-.03.05-.05.08-.1.16-.14.24-.02.03-.03.07-.04.11-.03.07-.06.14-.08.21-.07.21-.1.43-.1.68H10.5c0-.51.08-.94.2-1.3 0-.01 0-.02.01-.03.01-.04.04-.06.05-.1.06-.16.13-.3.22-.44.03-.05.07-.1.1-.15.03-.04.05-.09.08-.12l.01.01c.84-1.1 2.21-1.44 2.32-2.68.09-.98-.61-1.93-1.57-2.13-1.04-.22-1.98.39-2.3 1.28-.14.36-.47.65-.88.65h-.2c-.6 0-1.04-.59-.87-1.17.55-1.82 2.37-3.09 4.43-2.79 1.69.25 3.04 1.64 3.33 3.33.44 2.44-1.63 3.03-2.53 4.35z"
}));

const MaterialContactSupportRounded = (styled.default || styled)(MaterialContactSupportRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialContactSupportRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialContactSupportRounded;