import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  colors: {
    purple: {
      '900': '#1a1a29',
      '700': '#282162',
      '400': '#7562E0',
    },

    gray: {
      '900': '#181824',
    },
  },

  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },

  styles: {
    global: {
      body: {
        bg: 'gray.900', // bg --> background
        color: 'white',
      },
    },
  },
}

export const theme = extendTheme(customTheme)