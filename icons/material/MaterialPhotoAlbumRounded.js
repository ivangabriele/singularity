import React from 'react';
import styled from 'styled-components';

const MaterialPhotoAlbumRoundedSvg = props => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  ...props
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm.63 14.19l1.99-2.56c.2-.25.58-.26.78-.01l1.74 2.1 2.6-3.34c.2-.26.6-.26.79.01l2.87 3.82c.25.33.01.8-.4.8H7.02c-.41-.01-.65-.49-.39-.82z"
}));

const MaterialPhotoAlbumRounded = (styled.default || styled)(MaterialPhotoAlbumRoundedSvg).attrs(p => ({
  accent: p.accent || 'primary'
}))`
  fill: ${p => p.theme.color[p.accent].active};
`;
export default MaterialPhotoAlbumRounded;