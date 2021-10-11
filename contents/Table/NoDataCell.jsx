import styled from 'styled-components'

const NoDataCell = styled.td`
  overflow: hidden;
  padding: ${p => p.theme.padding.layout.medium};
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default NoDataCell
