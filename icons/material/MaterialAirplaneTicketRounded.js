import React from 'react';
import styled from 'styled-components';

const MaterialAirplaneTicketRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M20.19,4H4C2.9,4,2.01,4.9,2.01,6v4C3.11,10,4,10.9,4,12s-0.89,2-2,2v4c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6 C22,4.9,21.19,4,20.19,4z M17.73,13.3l-8.49,2.26c-0.22,0.06-0.45-0.04-0.56-0.23l-1.12-1.95c-0.18-0.3-0.01-0.69,0.32-0.78h0 c0.16-0.04,0.34-0.01,0.47,0.1l1.05,0.82l2.39-0.64L9.9,9.6c-0.26-0.44-0.02-1.01,0.47-1.15l0,0c0.26-0.07,0.54,0,0.74,0.18 l3.69,3.44l2.44-0.65c0.51-0.14,1.04,0.17,1.18,0.68C18.55,12.62,18.25,13.15,17.73,13.3z"
})));

const MaterialAirplaneTicketRounded = (styled.default || styled)(MaterialAirplaneTicketRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialAirplaneTicketRounded;