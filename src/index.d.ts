import 'vite/client'
declare module '*.png'

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    dev: boolean
  }
}
