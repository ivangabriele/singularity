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
const MaterialGamepadRoundedSvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M15 7.29V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4.29c0 .13.05.26.15.35l2.5 2.5c.2.2.51.2.71 0l2.5-2.5c.09-.09.14-.21.14-.35zM7.29 9H3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4.29c.13 0 .26-.05.35-.15l2.5-2.5c.2-.2.2-.51 0-.71l-2.5-2.5C7.55 9.05 7.43 9 7.29 9zM9 16.71V21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4.29c0-.13-.05-.26-.15-.35l-2.5-2.5c-.2-.2-.51-.2-.71 0l-2.5 2.5c-.09.09-.14.21-.14.35zm7.35-7.56l-2.5 2.5c-.2.2-.2.51 0 .71l2.5 2.5c.09.09.22.15.35.15H21c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-4.29c-.14-.01-.26.04-.36.14z"
}));
const MaterialGamepadRounded = (styled.default || styled)(MaterialGamepadRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;

  > path {
    fill: ${p => p.theme.color[p.accent].active};
  }
`;
MaterialGamepadRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialGamepadRounded;