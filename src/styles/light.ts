import type { Theme } from 'theme-ui'

export const theme: Theme = {
  colors: {
    background: '#fff',

    text: {
      primary: '#3d3d3d',
      hovered: '#000',
      disabled: '#595959',
    },
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 48, 64, 72],
  fontWeghts: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ['40em', '52em', '64em'],
}
