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

const MaterialLeakAddRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.05 21c.5 0 .94-.37.99-.87.41-4.27 3.81-7.67 8.08-8.08.5-.05.88-.48.88-.99 0-.59-.51-1.06-1.1-1-5.19.52-9.32 4.65-9.84 9.83-.06.59.4 1.11.99 1.11zM18 21h3v-3c-1.66 0-3 1.34-3 3zm-2.91 0c.49 0 .9-.36.98-.85.36-2.08 2-3.72 4.08-4.08.49-.08.85-.49.85-.98 0-.61-.54-1.09-1.14-1-2.96.48-5.29 2.81-5.77 5.77-.1.6.39 1.14 1 1.14zM12.97 3.02c-.5 0-.94.37-.99.87-.41 4.27-3.81 7.67-8.08 8.08-.5.05-.88.48-.88.99 0 .59.51 1.06 1.1 1 5.19-.52 9.32-4.65 9.84-9.83.07-.58-.39-1.11-.99-1.11zm-6.94 0h-3v3c1.66 0 3-1.34 3-3zm2.91 0c-.49 0-.9.36-.98.85-.36 2.08-2 3.72-4.08 4.08-.49.09-.85.49-.85.99 0 .61.54 1.09 1.14 1 2.96-.48 5.29-2.81 5.77-5.77.09-.61-.4-1.15-1-1.15z"
}));

const MaterialLeakAddRounded = (styled.default || styled)(MaterialLeakAddRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialLeakAddRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialLeakAddRounded;