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

const MaterialWavesRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17 16.99c-1.35 0-2.2.42-2.95.8-.65.33-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.43.22-.81.41-1.27.52-.45.1-.78.46-.78.91v.1c0 .6.56 1.03 1.14.91.74-.15 1.3-.43 1.81-.69.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.52.26 1.08.55 1.83.7.58.11 1.12-.33 1.12-.91v-.09c0-.46-.34-.82-.79-.92-.46-.1-.83-.29-1.26-.52-.75-.39-1.6-.81-2.95-.81zm0-4.45c-1.35 0-2.2.43-2.95.8-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.43.21-.81.41-1.28.52-.44.1-.77.46-.77.91v.1c0 .59.54 1.03 1.12.91.75-.15 1.31-.44 1.83-.69.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.52.26 1.08.55 1.83.7.58.11 1.12-.33 1.12-.92v-.09c0-.46-.34-.82-.79-.92-.46-.1-.83-.29-1.26-.52-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.43.22-.81.41-1.27.52-.45.1-.78.46-.78.91v.07c0 .6.54 1.04 1.12.92.75-.15 1.31-.44 1.83-.69.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.52.26 1.08.55 1.83.7.58.11 1.12-.33 1.12-.92v-.09c0-.46-.34-.82-.79-.92-.46-.1-.83-.28-1.26-.5zM17 8.09c-1.35 0-2.2.43-2.95.8-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.43.23-.8.42-1.26.52-.45.1-.79.46-.79.92v.09c0 .59.54 1.03 1.12.91.75-.15 1.31-.44 1.83-.69.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.52.26 1.08.55 1.83.7.58.11 1.12-.33 1.12-.91v-.09c0-.46-.34-.82-.79-.92-.46-.1-.83-.29-1.26-.52-.75-.39-1.6-.81-2.95-.81z"
}));

const MaterialWavesRounded = (styled.default || styled)(MaterialWavesRoundedSvg).attrs(p => ({
  accent: p.accent || ACCENT.PRIMARY,
  size: p.size || SIZE.MEDIUM
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
MaterialWavesRounded.propTypes = {
  accent: PropTypes.oneOf(ACCENTS),
  size: PropTypes.oneOf(SIZES)
};
export default MaterialWavesRounded;