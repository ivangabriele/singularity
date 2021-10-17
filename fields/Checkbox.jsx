import PropTypes from 'prop-types'
import React from 'react'
import { CheckSquare, Square } from 'react-feather'
import styled from 'styled-components'

import { SIZE, SIZES } from '../common/constants'

const StyledLabel = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: ${p => p.theme.typography.size[p.size] * 100}%;
  font-weight: 400;
  user-select: none;
  width: 100%;

  :disabled {
    opacity: 0.65;
  }

  > input {
    cursor: pointer;
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;
  }

  > svg {
    color: ${p => (p.hasError ? p.theme.color.danger.default : p.theme.color.secondary.default)};
    margin-right: ${p => p.theme.padding.input[p.size]};
    height: ${p => p.theme.typography.size[p.size] * 1.5}rem !important;
    transition-delay: 0s, 0s, 0s, 0s;
    transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
    transition-property: color, background-color, border-color, box-shadow;
    transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;
    width: ${p => p.theme.typography.size[p.size] * 1.5}rem !important;
  }
  :hover > svg {
    color: ${p => (p.hasError ? p.theme.color.danger.active : p.theme.color.secondary.active)};
  }
`

const Helper = styled.p`
  margin: 0;
  padding: ${p => p.theme.padding.layout.tiny} 0 0 0;
`

const Error = styled.p`
  color: ${p => p.theme.color.danger.default};
  font-weight: 500;
  margin: 0;
  padding: ${p => p.theme.padding.layout.tiny} 0 0 0;
`

const Checkbox = React.forwardRef(
  ({ checked, className, defaultChecked, error, helper, label, onChange, size, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked === true || checked === true)

    const hasError = error !== null

    const handleOnChange = event => {
      setIsChecked(event.target.checked)

      if (onChange) {
        onChange(event)
      }
    }

    return (
      <div className={className}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <StyledLabel className="Checkbox" hasError={hasError} size={size}>
          <input
            ref={ref}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={handleOnChange}
            type="checkbox"
            {...props}
          />

          {isChecked ? <CheckSquare /> : <Square />}
          {label}
        </StyledLabel>

        {!error && helper && (
          <Helper className="Helper" size={size}>
            {helper}
          </Helper>
        )}

        {error && (
          <Error className="Error" size={size}>
            {error}
          </Error>
        )}
      </div>
    )
  },
)

Checkbox.displayName = 'Checkbox'

Checkbox.defaultProps = {
  error: null,
  helper: null,
  size: SIZE.MEDIUM,
}

Checkbox.propTypes = {
  error: PropTypes.string,
  helper: PropTypes.string,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(SIZES),
}

export default Checkbox