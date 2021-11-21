import React from 'react';
import styled from 'styled-components';

const MaterialWaterRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 24 24",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0,0h24v24H0V0z",
  fill: "none"
})), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M21.98,14H22H21.98z M5.35,13c1.19,0,1.42,1,3.33,1c1.95,0,2.09-1,3.33-1c1.19,0,1.42,1,3.33,1c1.95,0,2.09-1,3.33-1 c0.93,0,1.05,0.45,2.01,0.79c0.63,0.22,1.3-0.24,1.3-0.91c0-0.52-0.23-0.83-0.64-0.97c-0.6-0.22-1.15-0.9-2.69-0.9 c-1.95,0-2.09,1-3.33,1c-1.19,0-1.42-1-3.33-1c-1.95,0-2.09,1-3.33,1c-1.19,0-1.42-1-3.33-1c-1.54,0-2.13,0.71-2.68,0.91 C2.24,12.05,2,12.35,2,12.89c0,0.67,0.66,1.13,1.29,0.91C4.35,13.44,4.39,13,5.35,13z M18.67,15c-1.95,0-2.09,1-3.33,1 c-1.19,0-1.42-1-3.33-1c-1.95,0-2.1,1-3.34,1c-1.24,0-1.38-1-3.33-1c-1.53,0-2.15,0.71-2.69,0.91C2.24,16.05,2,16.36,2,16.89 c0,0.67,0.66,1.13,1.3,0.91C4.32,17.44,4.38,17,5.34,17c1.24,0,1.38,1,3.33,1c1.95,0,2.1-1,3.34-1c1.19,0,1.42,1,3.33,1 c1.94,0,2.09-1,3.33-1c0.94,0,1.06,0.46,2.03,0.8c0.63,0.22,1.3-0.24,1.3-0.91c0-0.53-0.24-0.83-0.65-0.98 C20.82,15.72,20.21,15,18.67,15z M5.35,9c1.19,0,1.42,1,3.33,1c1.95,0,2.09-1,3.33-1c1.19,0,1.42,1,3.33,1c1.95,0,2.09-1,3.33-1 c0.93,0,1.05,0.45,2.01,0.79c0.63,0.22,1.3-0.24,1.3-0.91c0-0.52-0.23-0.83-0.64-0.97C20.74,7.68,20.19,7,18.65,7 c-1.95,0-2.09,1-3.33,1c-1.19,0-1.42-1-3.33-1C10.04,7,9.9,8,8.66,8C7.47,8,7.24,7,5.33,7C3.79,7,3.2,7.71,2.65,7.91 C2.24,8.05,2,8.35,2,8.89c0,0.67,0.66,1.13,1.29,0.91C4.35,9.44,4.39,9,5.35,9z"
}))));

const MaterialWaterRounded = (styled.default || styled)(MaterialWaterRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary',
  size: p.size || 'medium'
}))`
  fill: ${p => p.theme.color[p.accent].active};
  height: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
  max-width: calc(${p => p.theme.typography.size[p.size]} * 1.5rem) !important;
`;
export default MaterialWaterRounded;