import { css, CSSProp } from 'styled-components'

const sizes: { [key: string]: number } = {
  mobile: 320,
  desktop: 650,
}

const colors = {
  gray1: '#ebebeb',
  gray2: '#d4d4d4',
  black: '#000000',
  white: '#ffffff',
  blue: '#4130be',
  purple: '#cbc5f0',
}

interface IMedia {
  mobile: (...args: string[]) => CSSProp | undefined
  desktop: (...args: string[]) => CSSProp | undefined
}

const media: IMedia = {
  mobile: () => undefined,
  desktop: () => undefined,
}

Object.keys(sizes).reduce((acc: IMedia, label: string) => {
  switch (label) {
    case 'desktop':
      acc.desktop = (...args: string[]) =>
        css`
          @media only screen and (min-width: ${sizes.desktop}px) {
            ${args}
          }
        `
      break

    case 'mobile':
      acc.mobile = (...args: string[]) =>
        css`
          @media only screen and (max-width: ${sizes.desktop}px) {
            ${args}
          }
        `
      break

    default:
      break
  }

  return acc
}, media)

const theme = {
  colors,
  media,
}

export default theme
