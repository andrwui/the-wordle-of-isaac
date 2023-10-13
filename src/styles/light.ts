import type { Theme } from 'theme-ui'

export const lightTheme: Theme = {
  colors: {
    background: '#fff',
    hovered: '#000',

    text: {
      primary: '#3d3d3d',
      hovered: '#000',
      disabled: '#595959',
    },
  },

  fontSizes: [14, 16, 18, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ['40em', '52em', '64em'],
  styles: {
    root: {
      width: '100dvw',
      height: '100dvh',

      body: {
        width: '100%',
        height: '100%',

        '#root': {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        },
      },

      '& *': {
        boxSizing: 'border-box',
        p: 0,
      },

      '& .header': {
        width: '100%',
        height: 'min-content',
        display: 'flex',
        justifyContent: 'center',

        '&__img': {
          objectFit: 'contain',
          height: '5em',
          filter: 'saturate(0)',
        },
      },
    },
  },
}
