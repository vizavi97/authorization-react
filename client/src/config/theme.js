import { theme } from '@chakra-ui/core'

const fonts = {...theme.fonts, mono: `'Menlo', monospace`}

const breakpoints = ['40em', '52em', '64em']

export const defaultTheme = {
  ...theme,
  colors: {
    ...theme.colors,
  },
  fonts,
  breakpoints,
  icons: {
    ...theme.icons,
  }
}
