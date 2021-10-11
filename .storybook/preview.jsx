import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../common/theme'
import GlobalStyle from '../GlobalStyle'

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Story />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
