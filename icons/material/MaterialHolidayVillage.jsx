import React from 'react'

import Icon from '../Icon'

const MaterialHolidayVillageSvg = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M18,20V8.35L13.65,4h-2.83L16,9.18V20H18z M22,20V6.69L19.31,4h-2.83L20,7.52V20H22z M8,4l-6,6v10h5v-5h2v5h5V10L8,4z M9,13 H7v-2h2V13z" />
  </svg>
)

const MaterialHolidayVillage = props => <Icon as={MaterialHolidayVillageSvg} {...props} />

MaterialHolidayVillage.defaultProps = { ...Icon.defaultProps }

MaterialHolidayVillage.propTypes = { ...Icon.propTypes }

export default MaterialHolidayVillage
